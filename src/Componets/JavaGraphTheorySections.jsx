import React from "react";

export const JAVA_GRAPH_THEORY_SECTIONS = [
  {
    id: 0,
    title: "Curriculum Overview: Graph Theory & Graph Algorithms",
    category: "Module Overview",
    content: (
      <div className="space-y-4">
        <p key="p-0-0" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="text-stone-900 font-semibold">Module 17 — Graph Theory &amp; Graph Algorithms</strong>
        </p>
        <p key="p-0-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Graph Theory is one of the most important topics in Data Structures and Algorithms. It is widely used in software engineering, networking, operating systems, databases, maps, social networks, distributed systems, scheduling, and competitive programming.
        </p>
        <p key="p-0-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In previous modules, you learned arrays, linked lists, stacks, queues, trees, hashing, searching, sorting, and greedy algorithms.
        </p>
        <p key="p-0-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now you will learn how to represent and solve problems involving relationships between objects.
        </p>
        <p key="p-0-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <ul key="ul-0-16" className="my-3 space-y-1.5 pl-2">
          <li key="li-0-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Google Maps represents locations and roads as a graph.</span>
          </li>
          <li key="li-0-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Social networks represent people and friendships as a graph.</span>
          </li>
          <li key="li-0-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Computer networks represent computers and connections as a graph.</span>
          </li>
          <li key="li-0-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Course prerequisite systems represent dependencies as a directed graph.</span>
          </li>
          <li key="li-0-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Operating systems can use graphs to detect resource deadlocks.</span>
          </li>
          <li key="li-0-5" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Communication networks use graph algorithms to find routes between devices.</span>
          </li>
        </ul>
        <p key="p-0-17" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">The main objective of this module is to understand how graphs work, how to traverse them efficiently, and how to solve advanced graph problems using Java.</strong>
        </p>
        <p key="p-0-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We will cover graph representations, BFS, DFS, connected components, cycle detection, bipartite graphs, topological sorting, strongly connected components, Kosaraju&apos;s algorithm, Tarjan&apos;s algorithm, bridges, and articulation points.
        </p>
      </div>
    )
  },
  {
    id: 1,
    title: "1. Graph Fundamentals",
    category: "Core Principles",
    content: (
      <div className="space-y-4">
        <h3 key="h3-1-2" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.1 What Is a Graph?
        </h3>
        <p key="p-1-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A graph is a non-linear data structure consisting of:
        </p>
        <ul key="ul-1-8" className="my-3 space-y-1.5 pl-2">
          <li key="li-1-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Vertices (also called nodes).</span>
          </li>
          <li key="li-1-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Edges (connections between vertices).</span>
          </li>
        </ul>
        <p key="p-1-9" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A graph is generally represented as:
        </p>
        <div key="eq-1-12" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"G = (V,E) \\"}
        </div>
        <p key="p-1-13" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Where:
        </p>
        <ul key="ul-1-17" className="my-3 space-y-1.5 pl-2">
          <li key="li-1-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>\<code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-stone-50 border border-[#e7e3da]">V\</code> = Set of vertices.</span>
          </li>
          <li key="li-1-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>\<code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-stone-50 border border-[#e7e3da]">E\</code> = Set of edges.</span>
          </li>
        </ul>
        <p key="p-1-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider a graph representing five cities.
        </p>
        <p key="p-1-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Example: City connection graph</strong>
        </p>
        <p key="p-1-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Each circle represents a vertex. Each connecting line represents an edge.
        </p>
        <p key="p-1-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In this graph:
        </p>
        <div key="code-1-41" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Vertices:
V = {A, B, C, D, E}

Edges:
E = {
    (A,B),
    (B,C),
    (C,D),
    (D,E),
    (E,A),
    (B,D),
    (A,D)
}`}</code>
          </pre>
        </div>
        <p key="p-1-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore:
        </p>
        <div key="eq-1-45" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"|V|=5 \\"}
        </div>
        <div key="eq-1-47" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"|E|=7 \\"}
        </div>
        <p key="p-1-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The graph contains five vertices and seven edges.
        </p>
        <h3 key="h3-1-50" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.2 Real-World Applications
        </h3>
        <div key="table-1-61" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-1-0" className="p-3 font-semibold">Application</th>
                <th key="th-1-1" className="p-3 font-semibold">Vertices</th>
                <th key="th-1-2" className="p-3 font-semibold">Edges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-1-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-1-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Google Maps</td>
                <td key="td-1-0-1" className="p-3 text-stone-700 ">Locations</td>
                <td key="td-1-0-2" className="p-3 text-stone-700 ">Roads</td>
              </tr>
              <tr key="tr-1-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-1-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Social network</td>
                <td key="td-1-1-1" className="p-3 text-stone-700 ">Users</td>
                <td key="td-1-1-2" className="p-3 text-stone-700 ">Friendships or follows</td>
              </tr>
              <tr key="tr-1-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-1-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Computer network</td>
                <td key="td-1-2-1" className="p-3 text-stone-700 ">Devices</td>
                <td key="td-1-2-2" className="p-3 text-stone-700 ">Network connections</td>
              </tr>
              <tr key="tr-1-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-1-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Web graph</td>
                <td key="td-1-3-1" className="p-3 text-stone-700 ">Web pages</td>
                <td key="td-1-3-2" className="p-3 text-stone-700 ">Hyperlinks</td>
              </tr>
              <tr key="tr-1-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-1-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Course prerequisites</td>
                <td key="td-1-4-1" className="p-3 text-stone-700 ">Courses</td>
                <td key="td-1-4-2" className="p-3 text-stone-700 ">Dependency relationships</td>
              </tr>
              <tr key="tr-1-5" className="hover:bg-stone-50 transition-colors">
                <td key="td-1-5-0" className="p-3 text-stone-700 font-mono text-stone-800">Airline network</td>
                <td key="td-1-5-1" className="p-3 text-stone-700 ">Airports</td>
                <td key="td-1-5-2" className="p-3 text-stone-700 ">Flights</td>
              </tr>
              <tr key="tr-1-6" className="hover:bg-stone-50 transition-colors">
                <td key="td-1-6-0" className="p-3 text-stone-700 font-mono text-stone-800">Recommendation system</td>
                <td key="td-1-6-1" className="p-3 text-stone-700 ">Products or users</td>
                <td key="td-1-6-2" className="p-3 text-stone-700 ">Relationships</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-1-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example, when a user follows another user on a social platform, that relationship can be represented as a directed edge.
        </p>
        <p key="p-1-64" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When two people are mutual friends, their relationship can be represented as an undirected edge.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Directed and Undirected Graphs",
    category: "Core Principles",
    content: (
      <div className="space-y-4">
        <p key="p-2-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are two fundamental types of graphs based on the direction of their edges.
        </p>
        <h3 key="h3-2-4" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.1 Undirected Graph
        </h3>
        <p key="p-2-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An undirected graph is a graph in which edges do not have a direction.
        </p>
        <p key="p-2-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If vertex A is connected to vertex B, then B is also connected to A.
        </p>
        <p key="p-2-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The edge is represented as:
        </p>
        <div key="eq-2-13" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"(A,B) = (B,A) \\"}
        </div>
        <p key="p-2-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <p key="p-2-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Undirected graph</strong>
        </p>
        <p key="p-2-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The connections work in both directions:
        </p>
        <ul key="ul-2-24" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>A can reach B.</span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>B can reach A.</span>
          </li>
          <li key="li-2-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>B can reach C.</span>
          </li>
          <li key="li-2-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>C can reach B.</span>
          </li>
        </ul>
        <p key="p-2-25" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-2-30" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Mutual friendship.</span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Two-way roads.</span>
          </li>
          <li key="li-2-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Two computers connected through a two-way network link.</span>
          </li>
        </ul>
        <p key="p-2-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Java implementation:
        </p>
        <div key="code-2-37" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`adj.get(u).add(v);
adj.get(v).add(u);`}</code>
          </pre>
        </div>
        <p key="p-2-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Both directions are stored.
        </p>
        <h3 key="h3-2-40" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.2 Directed Graph
        </h3>
        <p key="p-2-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A directed graph, also called a digraph, has edges with specific directions.
        </p>
        <p key="p-2-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An edge from A to B does not necessarily mean that B can reach A directly.
        </p>
        <p key="p-2-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It is represented as:
        </p>
        <div key="eq-2-49" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"A \\rightarrow B \\"}
        </div>
        <p key="p-2-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <p key="p-2-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Directed graph</strong>
        </p>
        <div key="code-2-57" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → C`}</code>
          </pre>
        </div>
        <p key="p-2-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A can reach B, and B can reach C. There is no direct edge from B to A.
        </p>
        <p key="p-2-60" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-2-67" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Instagram following relationships.</span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>One-way roads.</span>
          </li>
          <li key="li-2-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Course dependencies.</span>
          </li>
          <li key="li-2-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Webpage hyperlinks.</span>
          </li>
          <li key="li-2-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Directed communication or workflow relationships.</span>
          </li>
        </ul>
        <p key="p-2-68" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Java implementation:
        </p>
        <div key="code-2-73" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`adj.get(u).add(v);`}</code>
          </pre>
        </div>
        <p key="p-2-74" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We add only one direction.
        </p>
        <h3 key="h3-2-76" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.3 Directed vs Undirected
        </h3>
        <div key="table-2-86" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-2-0" className="p-3 font-semibold">Feature</th>
                <th key="th-2-1" className="p-3 font-semibold">Directed graph</th>
                <th key="th-2-2" className="p-3 font-semibold">Undirected graph</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-2-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-2-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Edge direction</td>
                <td key="td-2-0-1" className="p-3 text-stone-700 ">Yes</td>
                <td key="td-2-0-2" className="p-3 text-stone-700 ">No</td>
              </tr>
              <tr key="tr-2-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-2-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Relationship</td>
                <td key="td-2-1-1" className="p-3 text-stone-700 ">One-way</td>
                <td key="td-2-1-2" className="p-3 text-stone-700 ">Two-way</td>
              </tr>
              <tr key="tr-2-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-2-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Edge representation</td>
                <td key="td-2-2-1" className="p-3 text-stone-700 ">A → B</td>
                <td key="td-2-2-2" className="p-3 text-stone-700 ">A — B</td>
              </tr>
              <tr key="tr-2-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-2-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Reverse connection</td>
                <td key="td-2-3-1" className="p-3 text-stone-700 ">Not guaranteed</td>
                <td key="td-2-3-2" className="p-3 text-stone-700 ">Always exists</td>
              </tr>
              <tr key="tr-2-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-2-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Examples</td>
                <td key="td-2-4-1" className="p-3 text-stone-700 ">Following, dependencies</td>
                <td key="td-2-4-2" className="p-3 text-stone-700 ">Friendship, mutual roads</td>
              </tr>
              <tr key="tr-2-5" className="hover:bg-stone-50 transition-colors">
                <td key="td-2-5-0" className="p-3 text-stone-700 font-mono text-stone-800">Adjacency entries per edge</td>
                <td key="td-2-5-1" className="p-3 text-stone-700 ">Usually 1</td>
                <td key="td-2-5-2" className="p-3 text-stone-700 ">Usually 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Weighted and Unweighted Graphs",
    category: "Core Principles",
    content: (
      <div className="space-y-4">
        <p key="p-3-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Graphs can also be categorized based on whether their edges contain weights.
        </p>
        <h3 key="h3-3-4" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.1 Unweighted Graph
        </h3>
        <p key="p-3-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In an unweighted graph, edges simply represent connections.
        </p>
        <p key="p-3-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There is no numerical cost associated with travelling along an edge.
        </p>
        <p key="p-3-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-3-17" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A — B — C
|       |
D — — — E`}</code>
          </pre>
        </div>
        <p key="p-3-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Each connection is treated equally.
        </p>
        <p key="p-3-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Unweighted graphs are commonly used for:
        </p>
        <ul key="ul-3-26" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Friend relationships.</span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Basic network connectivity.</span>
          </li>
          <li key="li-3-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Number of connections between users.</span>
          </li>
          <li key="li-3-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Minimum number of steps between nodes.</span>
          </li>
        </ul>
        <h3 key="h3-3-27" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.2 Weighted Graph
        </h3>
        <p key="p-3-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In a weighted graph, every edge has a numerical value called its weight.
        </p>
        <p key="p-3-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The weight could represent:
        </p>
        <ul key="ul-3-39" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Distance.</span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Time.</span>
          </li>
          <li key="li-3-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Cost.</span>
          </li>
          <li key="li-3-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Network latency.</span>
          </li>
          <li key="li-3-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Travel expense.</span>
          </li>
          <li key="li-3-5" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Connection strength.</span>
          </li>
        </ul>
        <p key="p-3-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <p key="p-3-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Weighted graph: Road distances</strong>
        </p>
        <p key="p-3-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example edge weights:
        </p>
        <ul key="ul-3-50" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>A to B: 10</span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>B to C: 15</span>
          </li>
          <li key="li-3-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>A to D: 20</span>
          </li>
          <li key="li-3-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>D to C: 12</span>
          </li>
        </ul>
        <p key="p-3-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A weighted graph can be directed or undirected.
        </p>
        <p key="p-3-53" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Important:</strong> BFS finds shortest paths in terms of the number of edges in an unweighted graph. It does not generally find minimum total weight in a weighted graph. Algorithms such as Dijkstra&apos;s algorithm and Bellman–Ford are used for weighted shortest paths and will build on these graph fundamentals.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Vertices, Edges, Degree & Terminology",
    category: "Core Principles",
    content: (
      <div className="space-y-4">
        <p key="p-4-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Before implementing graphs, you must understand the terminology used in graph problems.
        </p>
        <h3 key="h3-4-4" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.1 Vertex
        </h3>
        <p key="p-4-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A vertex is an individual node in a graph.
        </p>
        <p key="p-4-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-4-13" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A, B, C, D`}</code>
          </pre>
        </div>
        <p key="p-4-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Each represents a vertex.
        </p>
        <h3 key="h3-4-16" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.2 Edge
        </h3>
        <p key="p-4-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An edge is a connection between two vertices.
        </p>
        <p key="p-4-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-4-25" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A — B`}</code>
          </pre>
        </div>
        <p key="p-4-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This connection is an edge.
        </p>
        <h3 key="h3-4-28" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.3 Adjacent Vertices
        </h3>
        <p key="p-4-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Two vertices are adjacent if there is an edge directly connecting them.
        </p>
        <p key="p-4-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If:
        </p>
        <div key="code-4-37" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A — B — C`}</code>
          </pre>
        </div>
        <p key="p-4-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Then:
        </p>
        <ul key="ul-4-43" className="my-3 space-y-1.5 pl-2">
          <li key="li-4-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>A and B are adjacent.</span>
          </li>
          <li key="li-4-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>B and C are adjacent.</span>
          </li>
          <li key="li-4-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>A and C are not adjacent.</span>
          </li>
        </ul>
        <h3 key="h3-4-44" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.4 Degree of a Vertex
        </h3>
        <p key="p-4-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In an undirected graph, the degree is the number of edges connected to a vertex.
        </p>
        <p key="p-4-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-4-57" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`    B
    |
C — A — D
    |
    E`}</code>
          </pre>
        </div>
        <p key="p-4-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Vertex A has four connections.
        </p>
        <div key="eq-4-61" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"degree(A)=4 \\"}
        </div>
        <p key="p-4-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An isolated vertex has degree zero.
        </p>
        <p key="p-4-64" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A leaf vertex in a tree has degree one, except for a single-vertex tree.
        </p>
        <h3 key="h3-4-66" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.5 In-Degree and Out-Degree
        </h3>
        <p key="p-4-68" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These concepts are used in directed graphs.
        </p>
        <p key="p-4-70" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">In-degree:</strong> Number of edges entering a vertex.
        </p>
        <p key="p-4-72" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Out-degree:</strong> Number of edges leaving a vertex.
        </p>
        <p key="p-4-74" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-4-82" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → C
B → C
C → D
C → E`}</code>
          </pre>
        </div>
        <p key="p-4-83" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For vertex C:
        </p>
        <div key="eq-4-86" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"indegree(C)=2 \\"}
        </div>
        <div key="eq-4-88" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"outdegree(C)=2 \\"}
        </div>
        <p key="p-4-89" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These concepts are particularly important in Kahn&apos;s topological sorting algorithm.
        </p>
        <h3 key="h3-4-91" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.6 Path
        </h3>
        <p key="p-4-93" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A path is a sequence of vertices connected by edges.
        </p>
        <p key="p-4-95" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-4-100" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → C → D`}</code>
          </pre>
        </div>
        <p key="p-4-101" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is a path from A to D.
        </p>
        <h3 key="h3-4-103" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.7 Cycle
        </h3>
        <p key="p-4-105" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A cycle is a path that starts and ends at the same vertex, with at least one edge.
        </p>
        <p key="p-4-107" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-4-112" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → C → A`}</code>
          </pre>
        </div>
        <p key="p-4-113" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Cycle detection is an important graph problem that we will cover later.
        </p>
        <h3 key="h3-4-115" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.8 Connected Graph
        </h3>
        <p key="p-4-117" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An undirected graph is connected if every vertex can be reached from every other vertex.
        </p>
        <p key="p-4-119" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If some vertices cannot reach others, the graph is disconnected.
        </p>
        <h3 key="h3-4-121" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.9 Complete Graph
        </h3>
        <p key="p-4-123" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A complete undirected graph has an edge between every pair of distinct vertices.
        </p>
        <p key="p-4-125" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For N vertices, the number of edges is:
        </p>
        <div key="eq-4-128" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"E=\\frac{N(N-1)}{2} \\"}
        </div>
        <p key="p-4-129" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example, a complete graph of four vertices has:
        </p>
        <div key="eq-4-132" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"E=\\frac{4(4-1)}{2}=6 \\"}
        </div>
        <h3 key="h3-4-133" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.10 Self-Loop and Parallel Edges
        </h3>
        <p key="p-4-135" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A self-loop is an edge connecting a vertex to itself.
        </p>
        <div key="code-4-140" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A ↻`}</code>
          </pre>
        </div>
        <p key="p-4-141" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Parallel edges are two or more different edges connecting the same pair of vertices.
        </p>
        <p key="p-4-143" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These are allowed in multigraphs. Some algorithm implementations assume a simple graph without parallel edges, so we will identify where that assumption matters.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Graph Representation (Matrix, List, Edge List)",
    category: "Representations",
    content: (
      <div className="space-y-4">
        <p key="p-5-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A computer must store graph relationships in a suitable data structure before we can run algorithms on them.
        </p>
        <p key="p-5-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are three main graph representations:
        </p>
        <ol key="ol-5-9" className="my-3 space-y-2 pl-2">
          <li key="oli-5-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Adjacency Matrix.</span>
          </li>
          <li key="oli-5-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Adjacency List.</span>
          </li>
          <li key="oli-5-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Edge List.</span>
          </li>
        </ol>
        <p key="p-5-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Each has advantages and disadvantages.
        </p>
        <p key="p-5-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Let&apos;s use this graph:
        </p>
        <div key="code-5-23" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Vertices: 0, 1, 2, 3

Edges:
0 — 1
0 — 2
1 — 2
2 — 3`}</code>
          </pre>
        </div>
        <h3 key="h3-5-24" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.1 Adjacency Matrix
        </h3>
        <p key="p-5-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An adjacency matrix is a two-dimensional array used to represent connections between vertices.
        </p>
        <p key="p-5-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If there are N vertices, we create:
        </p>
        <div key="eq-5-31" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"N \\times N \\"}
        </div>
        <p key="p-5-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          matrix.
        </p>
        <p key="p-5-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an unweighted graph:
        </p>
        <ul key="ul-5-38" className="my-3 space-y-1.5 pl-2">
          <li key="li-5-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">1</code> means an edge exists.</span>
          </li>
          <li key="li-5-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">0</code> means no edge exists.</span>
          </li>
        </ul>
        <p key="p-5-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <p key="p-5-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Adjacency matrix</strong>
        </p>
        <div key="table-5-49" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-5-0" className="p-3 font-semibold"><strong className="text-stone-900 font-semibold">&amp;#x20;</strong></th>
                <th key="th-5-1" className="p-3 font-semibold"><strong className="text-stone-900 font-semibold">0</strong></th>
                <th key="th-5-2" className="p-3 font-semibold"><strong className="text-stone-900 font-semibold">1</strong></th>
                <th key="th-5-3" className="p-3 font-semibold"><strong className="text-stone-900 font-semibold">2</strong></th>
                <th key="th-5-4" className="p-3 font-semibold"><strong className="text-stone-900 font-semibold">3</strong></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-5-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-0-0" className="p-3 text-stone-700 font-mono text-stone-800"><strong className="text-stone-900 font-semibold">0</strong></td>
                <td key="td-5-0-1" className="p-3 text-stone-700 ">0</td>
                <td key="td-5-0-2" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-0-3" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-0-4" className="p-3 text-stone-700 ">0</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-1-0" className="p-3 text-stone-700 font-mono text-stone-800"><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-1-1" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-1-2" className="p-3 text-stone-700 ">0</td>
                <td key="td-5-1-3" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-1-4" className="p-3 text-stone-700 ">0</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-2-0" className="p-3 text-stone-700 font-mono text-stone-800"><strong className="text-stone-900 font-semibold">2</strong></td>
                <td key="td-5-2-1" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-2-2" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-2-3" className="p-3 text-stone-700 ">0</td>
                <td key="td-5-2-4" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
              </tr>
              <tr key="tr-5-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-3-0" className="p-3 text-stone-700 font-mono text-stone-800"><strong className="text-stone-900 font-semibold">3</strong></td>
                <td key="td-5-3-1" className="p-3 text-stone-700 ">0</td>
                <td key="td-5-3-2" className="p-3 text-stone-700 ">0</td>
                <td key="td-5-3-3" className="p-3 text-stone-700 "><strong className="text-stone-900 font-semibold">1</strong></td>
                <td key="td-5-3-4" className="p-3 text-stone-700 ">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Rows and columns represent vertices. A 1 indicates a connection.
        </p>
        <p key="p-5-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an undirected graph, the matrix is symmetric:
        </p>
        <div key="eq-5-55" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"matrix[u][v]=matrix[v][u] \\"}
        </div>
        <h4 key="h4-5-56" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-5-96" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class AdjacencyMatrix {

    public static void main(String[] args) {

        int vertices = 4;

        int[][] matrix = new int[vertices][vertices];

        // Add undirected edges
        addEdge(matrix, 0, 1);
        addEdge(matrix, 0, 2);
        addEdge(matrix, 1, 2);
        addEdge(matrix, 2, 3);

        // Display the matrix
        for (int i = 0; i < vertices; i++) {

            for (int j = 0; j < vertices; j++) {

                System.out.print(matrix[i][j] + " ");
            }

            System.out.println();
        }
    }

    static void addEdge(
        int[][] matrix,
        int u,
        int v
    ) {

        matrix[u][v] = 1;
        matrix[v][u] = 1;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-5-97" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-5-105" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 1 1 0
1 0 1 0
1 1 0 1
0 0 1 0`}</code>
          </pre>
        </div>
        <p key="p-5-106" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a directed graph, store only:
        </p>
        <div key="code-5-111" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`matrix[u][v] = 1;`}</code>
          </pre>
        </div>
        <p key="p-5-112" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Do not automatically add the reverse connection.
        </p>
        <h4 key="h4-5-114" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Weighted Adjacency Matrix
        </h4>
        <p key="p-5-116" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For weighted graphs, store edge weights instead of 1.
        </p>
        <p key="p-5-118" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <div key="code-5-124" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`matrix[0][1] = 10;
matrix[1][0] = 10;`}</code>
          </pre>
        </div>
        <p key="p-5-125" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use a special value such as <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">INF</code> to represent the absence of an edge.
        </p>
        <div key="code-5-139" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int INF = 1_000_000_000;

int[][] matrix = new int[vertices][vertices];

for (int i = 0; i < vertices; i++) {

    Arrays.fill(matrix[i], INF);

    matrix[i][i] = 0;
}`}</code>
          </pre>
        </div>
        <h4 key="h4-5-140" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Complexity
        </h4>
        <div key="table-5-149" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-5-0" className="p-3 font-semibold">Operation</th>
                <th key="th-5-1" className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-5-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Store graph</td>
                <td key="td-5-0-1" className="p-3 text-stone-700 ">O(V²)</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Check whether edge exists</td>
                <td key="td-5-1-1" className="p-3 text-stone-700 ">O(1)</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Find all neighbors of a vertex</td>
                <td key="td-5-2-1" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-5-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Add edge</td>
                <td key="td-5-3-1" className="p-3 text-stone-700 ">O(1)</td>
              </tr>
              <tr key="tr-5-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Space</td>
                <td key="td-5-4-1" className="p-3 text-stone-700 ">O(V²)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 key="h4-5-150" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          When Should You Use It?
        </h4>
        <p key="p-5-152" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use adjacency matrices when:
        </p>
        <ul key="ul-5-158" className="my-3 space-y-1.5 pl-2">
          <li key="li-5-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>The graph is dense.</span>
          </li>
          <li key="li-5-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>There are many edges.</span>
          </li>
          <li key="li-5-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>You frequently check whether a particular edge exists.</span>
          </li>
          <li key="li-5-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>The number of vertices is relatively small.</span>
          </li>
        </ul>
        <p key="p-5-159" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A major disadvantage is that even a graph with very few edges still requires space proportional to \<code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-stone-50 border border-[#e7e3da]">V^2\</code>.
        </p>
        <h3 key="h3-5-161" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.2 Adjacency List
        </h3>
        <p key="p-5-163" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An adjacency list stores the neighbors of every vertex.
        </p>
        <p key="p-5-165" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Instead of reserving space for every possible connection, we store only existing edges.
        </p>
        <p key="p-5-167" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For the same graph:
        </p>
        <div key="code-5-175" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 — 1
0 — 2
1 — 2
2 — 3`}</code>
          </pre>
        </div>
        <p key="p-5-176" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The adjacency list is:
        </p>
        <div key="code-5-184" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1, 2
1 → 0, 2
2 → 0, 1, 3
3 → 2`}</code>
          </pre>
        </div>
        <h4 key="h4-5-185" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <p key="p-5-187" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Java&apos;s <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">ArrayList</code> can be used to implement an adjacency list.
        </p>
        <div key="code-5-233" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class AdjacencyList {

    public static void main(String[] args) {

        int vertices = 4;

        List<List<Integer>> adj =
            new ArrayList<>();

        // Create an empty list for every vertex
        for (int i = 0; i < vertices; i++) {

            adj.add(new ArrayList<>());
        }

        // Add undirected edges
        addEdge(adj, 0, 1);
        addEdge(adj, 0, 2);
        addEdge(adj, 1, 2);
        addEdge(adj, 2, 3);

        // Display adjacency list
        for (int i = 0; i < vertices; i++) {

            System.out.println(
                i + " → " + adj.get(i)
            );
        }
    }

    static void addEdge(
        List<List<Integer>> adj,
        int u,
        int v
    ) {

        adj.get(u).add(v);
        adj.get(v).add(u);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-5-234" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-5-242" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → [1, 2]
1 → [0, 2]
2 → [0, 1, 3]
3 → [2]`}</code>
          </pre>
        </div>
        <p key="p-5-243" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a directed graph:
        </p>
        <div key="code-5-248" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`adj.get(u).add(v);`}</code>
          </pre>
        </div>
        <h4 key="h4-5-249" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Complexity
        </h4>
        <div key="table-5-258" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-5-0" className="p-3 font-semibold">Operation</th>
                <th key="th-5-1" className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-5-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Store graph</td>
                <td key="td-5-0-1" className="p-3 text-stone-700 ">O(V + E)</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Add edge</td>
                <td key="td-5-1-1" className="p-3 text-stone-700 ">O(1) amortized</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Find all neighbors</td>
                <td key="td-5-2-1" className="p-3 text-stone-700 ">O(degree of vertex)</td>
              </tr>
              <tr key="tr-5-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Check whether edge exists</td>
                <td key="td-5-3-1" className="p-3 text-stone-700 ">O(degree of vertex)</td>
              </tr>
              <tr key="tr-5-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Space</td>
                <td key="td-5-4-1" className="p-3 text-stone-700 ">O(V + E)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-259" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The adjacency list is generally the preferred representation for sparse graphs and most traversal algorithms.
        </p>
        <h3 key="h3-5-261" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.3 Edge List
        </h3>
        <p key="p-5-263" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An edge list stores all graph edges as pairs of vertices.
        </p>
        <p key="p-5-265" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a weighted graph, each edge also stores its weight.
        </p>
        <p key="p-5-267" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-5-275" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 — 1
0 — 2
1 — 2
2 — 3`}</code>
          </pre>
        </div>
        <p key="p-5-276" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Edge list:
        </p>
        <div key="code-5-286" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3]
]`}</code>
          </pre>
        </div>
        <h4 key="h4-5-287" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-5-312" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class EdgeList {

    public static void main(String[] args) {

        List<int[]> edges = new ArrayList<>();

        edges.add(new int[]{0, 1});
        edges.add(new int[]{0, 2});
        edges.add(new int[]{1, 2});
        edges.add(new int[]{2, 3});

        for (int[] edge : edges) {

            System.out.println(
                edge[0] + " — " + edge[1]
            );
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-5-313" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For weighted graphs, use:
        </p>
        <div key="code-5-318" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`edges.add(new int[]{u, v, weight});`}</code>
          </pre>
        </div>
        <h4 key="h4-5-319" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Complexity
        </h4>
        <div key="table-5-328" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-5-0" className="p-3 font-semibold">Operation</th>
                <th key="th-5-1" className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-5-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Store graph</td>
                <td key="td-5-0-1" className="p-3 text-stone-700 ">O(E)</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Add edge</td>
                <td key="td-5-1-1" className="p-3 text-stone-700 ">O(1) amortized</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Search for a particular edge</td>
                <td key="td-5-2-1" className="p-3 text-stone-700 ">O(E)</td>
              </tr>
              <tr key="tr-5-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Find all edges</td>
                <td key="td-5-3-1" className="p-3 text-stone-700 ">O(E)</td>
              </tr>
              <tr key="tr-5-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Space</td>
                <td key="td-5-4-1" className="p-3 text-stone-700 ">O(E)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-329" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Edge lists are useful for algorithms that process every edge directly, such as Kruskal&apos;s Minimum Spanning Tree algorithm.
        </p>
        <h3 key="h3-5-331" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.4 Adjacency Matrix vs Adjacency List vs Edge List
        </h3>
        <div key="table-5-340" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-5-0" className="p-3 font-semibold">Feature</th>
                <th key="th-5-1" className="p-3 font-semibold">Matrix</th>
                <th key="th-5-2" className="p-3 font-semibold">Adjacency list</th>
                <th key="th-5-3" className="p-3 font-semibold">Edge list</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-5-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Space</td>
                <td key="td-5-0-1" className="p-3 text-stone-700 ">O(V²)</td>
                <td key="td-5-0-2" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-5-0-3" className="p-3 text-stone-700 ">O(E)</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Check an edge</td>
                <td key="td-5-1-1" className="p-3 text-stone-700 ">O(1)</td>
                <td key="td-5-1-2" className="p-3 text-stone-700 ">O(degree)</td>
                <td key="td-5-1-3" className="p-3 text-stone-700 ">O(E)</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Enumerate neighbors</td>
                <td key="td-5-2-1" className="p-3 text-stone-700 ">O(V)</td>
                <td key="td-5-2-2" className="p-3 text-stone-700 ">O(degree)</td>
                <td key="td-5-2-3" className="p-3 text-stone-700 ">O(E)</td>
              </tr>
              <tr key="tr-5-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Add an edge</td>
                <td key="td-5-3-1" className="p-3 text-stone-700 ">O(1)</td>
                <td key="td-5-3-2" className="p-3 text-stone-700 ">O(1) amortized</td>
                <td key="td-5-3-3" className="p-3 text-stone-700 ">O(1) amortized</td>
              </tr>
              <tr key="tr-5-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-5-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Best for</td>
                <td key="td-5-4-1" className="p-3 text-stone-700 ">Dense graphs</td>
                <td key="td-5-4-2" className="p-3 text-stone-700 ">Traversal</td>
                <td key="td-5-4-3" className="p-3 text-stone-700 ">Edge-based algorithms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-341" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Important:</strong> For most graph problems in this module, we will use adjacency lists.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Graph Implementation in Java",
    category: "Java Implementation",
    content: (
      <div className="space-y-4">
        <p key="p-6-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now let&apos;s build a reusable graph implementation rather than rewriting the graph structure for every problem.
        </p>
        <h3 key="h3-6-4" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.1 Basic Graph Class
        </h3>
        <div key="code-6-67" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

class Graph {

    int vertices;

    List<List<Integer>> adj;

    Graph(int vertices) {

        this.vertices = vertices;

        adj = new ArrayList<>();

        for (int i = 0; i < vertices; i++) {

            adj.add(new ArrayList<>());
        }
    }

    // Add an undirected edge
    void addUndirectedEdge(int u, int v) {

        adj.get(u).add(v);
        adj.get(v).add(u);
    }

    // Add a directed edge
    void addDirectedEdge(int u, int v) {

        adj.get(u).add(v);
    }

    // Display graph
    void display() {

        for (int i = 0; i < vertices; i++) {

            System.out.println(
                i + " → " + adj.get(i)
            );
        }
    }
}

public class GraphImplementation {

    public static void main(String[] args) {

        Graph graph = new Graph(5);

        graph.addUndirectedEdge(0, 1);
        graph.addUndirectedEdge(0, 2);
        graph.addUndirectedEdge(1, 3);
        graph.addUndirectedEdge(2, 4);

        graph.display();
    }
}`}</code>
          </pre>
        </div>
        <p key="p-6-68" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-6-77" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → [1, 2]
1 → [0, 3]
2 → [0, 4]
3 → [1]
4 → [2]`}</code>
          </pre>
        </div>
        <h3 key="h3-6-78" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.2 Weighted Graph Implementation
        </h3>
        <p key="p-6-80" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In weighted graphs, each adjacency entry must store both:
        </p>
        <ul key="ul-6-84" className="my-3 space-y-1.5 pl-2">
          <li key="li-6-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Destination vertex.</span>
          </li>
          <li key="li-6-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Edge weight.</span>
          </li>
        </ul>
        <p key="p-6-85" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We can create an <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">Edge</code> class.
        </p>
        <div key="code-6-155" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

class WeightedEdge {

    int to;
    int weight;

    WeightedEdge(int to, int weight) {

        this.to = to;
        this.weight = weight;
    }
}

class WeightedGraph {

    int vertices;

    List<List<WeightedEdge>> adj;

    WeightedGraph(int vertices) {

        this.vertices = vertices;

        adj = new ArrayList<>();

        for (int i = 0; i < vertices; i++) {

            adj.add(new ArrayList<>());
        }
    }

    void addUndirectedEdge(
        int u,
        int v,
        int weight
    ) {

        adj.get(u).add(
            new WeightedEdge(v, weight)
        );

        adj.get(v).add(
            new WeightedEdge(u, weight)
        );
    }

    void display() {

        for (int i = 0; i < vertices; i++) {

            System.out.print(i + " → ");

            for (WeightedEdge edge : adj.get(i)) {

                System.out.print(
                    "(" + edge.to
                    + ", weight=" + edge.weight
                    + ") "
                );
            }

            System.out.println();
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-6-156" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-6-167" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`WeightedGraph graph = new WeightedGraph(3);

graph.addUndirectedEdge(0, 1, 10);
graph.addUndirectedEdge(1, 2, 20);
graph.addUndirectedEdge(0, 2, 15);

graph.display();`}</code>
          </pre>
        </div>
        <p key="p-6-168" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-6-175" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → (1, weight=10) (2, weight=15)
1 → (0, weight=10) (2, weight=20)
2 → (1, weight=20) (0, weight=15)`}</code>
          </pre>
        </div>
        <p key="p-6-176" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This representation will become especially useful when we study shortest paths and minimum spanning trees.
        </p>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Breadth-First Search (BFS)",
    category: "Graph Traversal",
    content: (
      <div className="space-y-4">
        <p key="p-7-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Breadth-First Search is one of the fundamental graph traversal algorithms.
        </p>
        <p key="p-7-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS explores a graph level by level.
        </p>
        <p key="p-7-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It visits all immediate neighbors of a vertex before visiting vertices that are farther away.
        </p>
        <p key="p-7-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS uses a <strong className="text-stone-900 font-semibold">Queue</strong> data structure.
        </p>
        <h3 key="h3-7-10" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.1 How BFS Works
        </h3>
        <p key="p-7-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider this graph:
        </p>
        <div key="code-7-21" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`        0
       / \\
      1   2
     / \\   \\
    3   4   5`}</code>
          </pre>
        </div>
        <p key="p-7-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose we start from vertex 0.
        </p>
        <p key="p-7-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The traversal proceeds level by level.
        </p>
        <ul key="ul-7-29" className="my-3 space-y-1.5 pl-2">
          <li key="li-7-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Level 0: 0</span>
          </li>
          <li key="li-7-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Level 1: 1, 2</span>
          </li>
          <li key="li-7-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Level 2: 3, 4, 5</span>
          </li>
        </ul>
        <p key="p-7-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS traversal:
        </p>
        <div key="code-7-35" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2 → 3 → 4 → 5`}</code>
          </pre>
        </div>
        <p key="p-7-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This assumes the adjacency lists are processed in the displayed neighbor order. Changing the order of neighbors may change the traversal order without changing BFS correctness.
        </p>
        <h3 key="h3-7-38" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.2 BFS Algorithm
        </h3>
        <ol key="ol-7-45" className="my-3 space-y-2 pl-2">
          <li key="oli-7-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Create a visited array.</span>
          </li>
          <li key="oli-7-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Create an empty queue.</span>
          </li>
          <li key="oli-7-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Insert the starting vertex into the queue.</span>
          </li>
          <li key="oli-7-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Mark the starting vertex as visited.</span>
          </li>
          <li key="oli-7-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>While the queue is not empty:</span>
          </li>
        </ol>
        <ul key="ul-7-50" className="my-3 space-y-1.5 pl-2">
          <li key="li-7-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Remove a vertex from the front.</span>
          </li>
          <li key="li-7-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Process that vertex.</span>
          </li>
          <li key="li-7-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Visit its unvisited neighbors.</span>
          </li>
          <li key="li-7-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Mark each neighbor visited when it is inserted.</span>
          </li>
          <li key="li-7-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Add each neighbor to the queue.</span>
          </li>
        </ul>
        <p key="p-7-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The order of marking visited is important.
        </p>
        <p key="p-7-53" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We mark a vertex when adding it to the queue, not when removing it. This prevents the same vertex from being inserted repeatedly.
        </p>
        <h3 key="h3-7-55" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.3 BFS Java Implementation
        </h3>
        <div key="code-7-121" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class BFS {

    public static void bfs(
        List<List<Integer>> adj,
        int start
    ) {

        int vertices = adj.size();

        boolean[] visited = new boolean[vertices];

        Queue<Integer> queue = new ArrayDeque<>();

        // Start BFS
        visited[start] = true;
        queue.offer(start);

        while (!queue.isEmpty()) {

            int current = queue.poll();

            System.out.print(current + " ");

            // Explore neighbors
            for (int neighbor : adj.get(current)) {

                if (!visited[neighbor]) {

                    visited[neighbor] = true;

                    queue.offer(neighbor);
                }
            }
        }
    }

    public static void main(String[] args) {

        int vertices = 6;

        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < vertices; i++) {

            adj.add(new ArrayList<>());
        }

        adj.get(0).addAll(Arrays.asList(1, 2));

        adj.get(1).addAll(Arrays.asList(0, 3, 4));

        adj.get(2).addAll(Arrays.asList(0, 5));

        adj.get(3).add(1);
        adj.get(4).add(1);
        adj.get(5).add(2);

        bfs(adj, 0);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-7-122" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-7-127" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 1 2 3 4 5`}</code>
          </pre>
        </div>
        <h3 key="h3-7-128" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.4 BFS Dry Run
        </h3>
        <p key="p-7-130" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Let&apos;s understand how the queue changes.
        </p>
        <p key="p-7-132" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initial condition:
        </p>
        <p key="p-7-134" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">BFS queue simulation</strong>
        </p>
        <p key="p-7-136" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Step 1 of 7
        </p>
        <p key="p-7-138" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS
        </p>
        <p key="p-7-140" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Queue</strong>
        </p>
        <p key="p-7-142" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="text-stone-900 font-semibold">[0]</strong>
        </p>
        <p key="p-7-144" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Visited order</strong>
        </p>
        <p key="p-7-146" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          —
        </p>
        <p key="p-7-148" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Insert starting vertex 0.
        </p>
        <p key="p-7-150" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Previous
        </p>
        <p key="p-7-152" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Next stepReset
        </p>
        <p key="p-7-154" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The queue ensures that vertices discovered earlier are processed before vertices discovered later.
        </p>
        <h3 key="h3-7-156" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.5 BFS for Shortest Path in an Unweighted Graph
        </h3>
        <p key="p-7-158" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          One of BFS&apos;s most important applications is finding the shortest path in terms of the number of edges in an unweighted graph.
        </p>
        <p key="p-7-160" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why does BFS work?
        </p>
        <p key="p-7-162" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Because BFS explores all vertices at distance 1 before distance 2, all vertices at distance 2 before distance 3, and so on.
        </p>
        <p key="p-7-164" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We can maintain:
        </p>
        <ul key="ul-7-168" className="my-3 space-y-1.5 pl-2">
          <li key="li-7-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">dist[]</code>: Minimum number of edges from the starting vertex.</span>
          </li>
          <li key="li-7-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">parent[]</code>: Previous vertex on the discovered shortest path.</span>
          </li>
        </ul>
        <h4 key="h4-7-169" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-7-240" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class BFSShortestPath {

    public static void shortestPath(
        List<List<Integer>> adj,
        int source,
        int destination
    ) {

        int n = adj.size();

        int[] dist = new int[n];
        int[] parent = new int[n];

        Arrays.fill(dist, -1);
        Arrays.fill(parent, -1);

        Queue<Integer> queue = new ArrayDeque<>();

        dist[source] = 0;
        queue.offer(source);

        while (!queue.isEmpty()) {

            int u = queue.poll();

            if (u == destination) {
                break;
            }

            for (int v : adj.get(u)) {

                if (dist[v] == -1) {

                    dist[v] = dist[u] + 1;
                    parent[v] = u;

                    queue.offer(v);
                }
            }
        }

        if (dist[destination] == -1) {

            System.out.println("No path exists.");
            return;
        }

        List<Integer> path = new ArrayList<>();

        for (
            int v = destination;
            v != -1;
            v = parent[v]
        ) {
            path.add(v);
        }

        Collections.reverse(path);

        System.out.println("Shortest distance: "
            + dist[destination]);

        System.out.println("Path: " + path);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-7-241" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The shortest distance is measured in edges, not the sum of arbitrary edge weights.
        </p>
        <h3 key="h3-7-243" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.6 BFS Complexity
        </h3>
        <p key="p-7-245" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an adjacency list:
        </p>
        <div key="eq-7-248" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-7-249" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <ul key="ul-7-254" className="my-3 space-y-1.5 pl-2">
          <li key="li-7-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Every vertex is inserted into the queue at most once.</span>
          </li>
          <li key="li-7-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Every vertex is removed at most once.</span>
          </li>
          <li key="li-7-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Every adjacency-list entry is examined at most once.</span>
          </li>
        </ul>
        <p key="p-7-255" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Space complexity:
        </p>
        <div key="eq-7-258" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V) \\"}
        </div>
        <p key="p-7-259" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The visited array and queue require at most O(V) space.
        </p>
        <p key="p-7-261" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an adjacency matrix, exploring all neighbors requires scanning V possible entries per vertex:
        </p>
        <div key="eq-7-264" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V^2) \\"}
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "8. Depth-First Search (DFS)",
    category: "Graph Traversal",
    content: (
      <div className="space-y-4">
        <p key="p-8-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Depth-First Search explores a graph by going as deep as possible along one path before backtracking.
        </p>
        <p key="p-8-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          DFS uses either:
        </p>
        <ul key="ul-8-8" className="my-3 space-y-1.5 pl-2">
          <li key="li-8-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Recursion, which implicitly uses the call stack.</span>
          </li>
          <li key="li-8-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>An explicit Stack data structure.</span>
          </li>
        </ul>
        <h3 key="h3-8-9" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.1 How DFS Works
        </h3>
        <p key="p-8-11" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-8-20" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`        0
       / \\
      1   2
     / \\   \\
    3   4   5`}</code>
          </pre>
        </div>
        <p key="p-8-21" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Start from vertex 0.
        </p>
        <p key="p-8-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          One possible DFS traversal is:
        </p>
        <div key="code-8-28" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 3 → 4 → 2 → 5`}</code>
          </pre>
        </div>
        <p key="p-8-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The algorithm:
        </p>
        <ol key="ol-8-37" className="my-3 space-y-2 pl-2">
          <li key="oli-8-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Visit the starting vertex.</span>
          </li>
          <li key="oli-8-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Mark it as visited.</span>
          </li>
          <li key="oli-8-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Explore one unvisited neighbor.</span>
          </li>
          <li key="oli-8-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Continue deeper.</span>
          </li>
          <li key="oli-8-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>When no unvisited neighbor remains, backtrack.</span>
          </li>
          <li key="oli-8-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Continue exploring remaining neighbors.</span>
          </li>
        </ol>
        <p key="p-8-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Unlike BFS, DFS does not guarantee shortest paths.
        </p>
        <h3 key="h3-8-40" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.2 Recursive DFS
        </h3>
        <p key="p-8-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is the most common implementation.
        </p>
        <h4 key="h4-8-44" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-8-97" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class DFS {

    public static void dfs(
        List<List<Integer>> adj,
        int current,
        boolean[] visited
    ) {

        visited[current] = true;

        System.out.print(current + " ");

        for (int neighbor : adj.get(current)) {

            if (!visited[neighbor]) {

                dfs(adj, neighbor, visited);
            }
        }
    }

    public static void main(String[] args) {

        int vertices = 6;

        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < vertices; i++) {

            adj.add(new ArrayList<>());
        }

        adj.get(0).addAll(Arrays.asList(1, 2));

        adj.get(1).addAll(Arrays.asList(0, 3, 4));

        adj.get(2).addAll(Arrays.asList(0, 5));

        adj.get(3).add(1);
        adj.get(4).add(1);
        adj.get(5).add(2);

        boolean[] visited = new boolean[vertices];

        dfs(adj, 0, visited);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-8-98" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-8-103" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 1 3 4 2 5`}</code>
          </pre>
        </div>
        <h3 key="h3-8-104" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.3 Iterative DFS Using Stack
        </h3>
        <p key="p-8-106" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Recursive DFS can cause a stack overflow on very deep graphs.
        </p>
        <p key="p-8-108" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An alternative is to use an explicit stack.
        </p>
        <div key="code-8-149" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class IterativeDFS {

    public static void dfs(
        List<List<Integer>> adj,
        int start
    ) {

        int n = adj.size();

        boolean[] visited = new boolean[n];

        Stack<Integer> stack = new Stack<>();

        stack.push(start);

        visited[start] = true;

        while (!stack.isEmpty()) {

            int current = stack.pop();

            System.out.print(current + " ");

            for (int neighbor : adj.get(current)) {

                if (!visited[neighbor]) {

                    visited[neighbor] = true;

                    stack.push(neighbor);
                }
            }
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-8-150" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Depending on the order in which neighbors are pushed onto the stack, iterative DFS may produce a different valid traversal order from recursive DFS.
        </p>
        <h3 key="h3-8-152" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.4 DFS Complexity
        </h3>
        <p key="p-8-154" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Adjacency list:
        </p>
        <div key="eq-8-157" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-8-158" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Space:
        </p>
        <div key="eq-8-161" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V) \\"}
        </div>
        <p key="p-8-162" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The recursive call stack may reach a depth of O(V).
        </p>
      </div>
    )
  },
  {
    id: 9,
    title: "9. BFS vs DFS Comparative Analysis",
    category: "Comparative Analysis",
    content: (
      <div className="space-y-4">
        <p key="p-9-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Both algorithms traverse graphs, but their exploration strategies are different.
        </p>
        <div key="table-9-15" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-9-0" className="p-3 font-semibold">Feature</th>
                <th key="th-9-1" className="p-3 font-semibold">BFS</th>
                <th key="th-9-2" className="p-3 font-semibold">DFS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-9-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Full name</td>
                <td key="td-9-0-1" className="p-3 text-stone-700 ">Breadth-First Search</td>
                <td key="td-9-0-2" className="p-3 text-stone-700 ">Depth-First Search</td>
              </tr>
              <tr key="tr-9-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Data structure</td>
                <td key="td-9-1-1" className="p-3 text-stone-700 ">Queue</td>
                <td key="td-9-1-2" className="p-3 text-stone-700 ">Stack or recursion</td>
              </tr>
              <tr key="tr-9-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Exploration</td>
                <td key="td-9-2-1" className="p-3 text-stone-700 ">Level by level</td>
                <td key="td-9-2-2" className="p-3 text-stone-700 ">Deep before backtracking</td>
              </tr>
              <tr key="tr-9-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Shortest path in unweighted graph</td>
                <td key="td-9-3-1" className="p-3 text-stone-700 ">Yes</td>
                <td key="td-9-3-2" className="p-3 text-stone-700 ">Not guaranteed</td>
              </tr>
              <tr key="tr-9-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Cycle detection</td>
                <td key="td-9-4-1" className="p-3 text-stone-700 ">Yes</td>
                <td key="td-9-4-2" className="p-3 text-stone-700 ">Yes</td>
              </tr>
              <tr key="tr-9-5" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-5-0" className="p-3 text-stone-700 font-mono text-stone-800">Connected components</td>
                <td key="td-9-5-1" className="p-3 text-stone-700 ">Yes</td>
                <td key="td-9-5-2" className="p-3 text-stone-700 ">Yes</td>
              </tr>
              <tr key="tr-9-6" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-6-0" className="p-3 text-stone-700 font-mono text-stone-800">Bipartite checking</td>
                <td key="td-9-6-1" className="p-3 text-stone-700 ">Yes</td>
                <td key="td-9-6-2" className="p-3 text-stone-700 ">Yes</td>
              </tr>
              <tr key="tr-9-7" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-7-0" className="p-3 text-stone-700 font-mono text-stone-800">Topological sorting</td>
                <td key="td-9-7-1" className="p-3 text-stone-700 ">Kahn&apos;s variant</td>
                <td key="td-9-7-2" className="p-3 text-stone-700 ">DFS variant</td>
              </tr>
              <tr key="tr-9-8" className="hover:bg-stone-50 transition-colors">
                <td key="td-9-8-0" className="p-3 text-stone-700 font-mono text-stone-800">Complexity using adjacency list</td>
                <td key="td-9-8-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-9-8-2" className="p-3 text-stone-700 ">O(V + E)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-9-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Remember:</strong>
        </p>
        <ul key="ul-9-20" className="my-3 space-y-1.5 pl-2">
          <li key="li-9-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Use BFS when you need level-based traversal or minimum number of edges.</span>
          </li>
          <li key="li-9-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Use DFS when you need to explore paths deeply, detect structures, or perform recursive graph analysis.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 10,
    title: "10. Connected Components",
    category: "Connectivity",
    content: (
      <div className="space-y-4">
        <p key="p-10-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Connected components are an important concept in undirected graphs.
        </p>
        <h3 key="h3-10-4" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.1 What Is a Connected Component?
        </h3>
        <p key="p-10-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A connected component is a maximal group of vertices in which every vertex is reachable from every other vertex within that group.
        </p>
        <p key="p-10-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-10-23" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Component 1:

0 — 1 — 2

Component 2:

3 — 4

Component 3:

5 — 6`}</code>
          </pre>
        </div>
        <p key="p-10-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This graph has three connected components.
        </p>
        <p key="p-10-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Visual representation</strong>
        </p>
        <p key="p-10-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Notice that vertices from different components cannot reach each other.
        </p>
        <h3 key="h3-10-30" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.2 How to Find Connected Components
        </h3>
        <p key="p-10-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We can use either BFS or DFS.
        </p>
        <p key="p-10-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The strategy:
        </p>
        <ol key="ol-10-43" className="my-3 space-y-2 pl-2">
          <li key="oli-10-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Create a visited array.</span>
          </li>
          <li key="oli-10-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Start from vertex 0.</span>
          </li>
          <li key="oli-10-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Run BFS or DFS.</span>
          </li>
          <li key="oli-10-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>All vertices discovered belong to the same component.</span>
          </li>
          <li key="oli-10-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>Continue scanning all vertices.</span>
          </li>
          <li key="oli-10-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Whenever an unvisited vertex is found, begin another traversal.</span>
          </li>
          <li key="oli-10-6" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              7
            </span>
            <span>Count the components.</span>
          </li>
        </ol>
        <p key="p-10-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This works because every vertex belongs to exactly one connected component.
        </p>
        <h3 key="h3-10-46" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.3 Java Implementation Using BFS
        </h3>
        <div key="code-10-102" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class ConnectedComponents {

    public static List<List<Integer>> findComponents(
        List<List<Integer>> adj
    ) {

        int n = adj.size();

        boolean[] visited = new boolean[n];

        List<List<Integer>> components =
            new ArrayList<>();

        for (int i = 0; i < n; i++) {

            if (!visited[i]) {

                List<Integer> component =
                    new ArrayList<>();

                Queue<Integer> queue =
                    new ArrayDeque<>();

                queue.offer(i);
                visited[i] = true;

                while (!queue.isEmpty()) {

                    int u = queue.poll();

                    component.add(u);

                    for (int v : adj.get(u)) {

                        if (!visited[v]) {

                            visited[v] = true;

                            queue.offer(v);
                        }
                    }
                }

                components.add(component);
            }
        }

        return components;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-10-103" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-10-115" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`List<List<Integer>> components =
    findComponents(adj);

System.out.println(components);

System.out.println(
    "Number of components: " + components.size()
);`}</code>
          </pre>
        </div>
        <p key="p-10-116" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Possible output:
        </p>
        <div key="code-10-122" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[0, 1, 2], [3, 4], [5, 6]]
Number of components: 3`}</code>
          </pre>
        </div>
        <h3 key="h3-10-123" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.4 Why Do We Need the Outer Loop?
        </h3>
        <p key="p-10-125" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A common beginner mistake is to start BFS only from vertex 0.
        </p>
        <p key="p-10-127" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          That works only when every vertex is reachable from vertex 0.
        </p>
        <p key="p-10-129" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a disconnected graph, a single traversal cannot visit every vertex.
        </p>
        <p key="p-10-131" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The outer loop ensures that every unvisited component is explored.
        </p>
        <h3 key="h3-10-133" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.5 Complexity
        </h3>
        <p key="p-10-135" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Time:
        </p>
        <div key="eq-10-138" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-10-139" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Space:
        </p>
        <div key="eq-10-142" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V) \\"}
        </div>
        <p key="p-10-143" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This includes the visited array, queue, and component output.
        </p>
        <p key="p-10-145" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Important distinction:</strong> In directed graphs, connected components need more precise terminology.
        </p>
        <ul key="ul-10-149" className="my-3 space-y-1.5 pl-2">
          <li key="li-10-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Weakly connected components: Treat directed edges as undirected for connectivity.</span>
          </li>
          <li key="li-10-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Strongly connected components: Every vertex can reach every other vertex following directed edges.</span>
          </li>
        </ul>
        <p key="p-10-150" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We will study strongly connected components later.
        </p>
      </div>
    )
  },
  {
    id: 11,
    title: "11. Cycle Detection in Graphs (Directed & Undirected)",
    category: "Cycle Detection",
    content: (
      <div className="space-y-4">
        <p key="p-11-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Cycle detection is one of the most frequently asked graph interview topics.
        </p>
        <p key="p-11-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A cycle exists when we can start from a vertex, follow edges, and eventually return to a previously reached vertex according to the rules of the graph.
        </p>
        <p key="p-11-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The detection strategy depends on whether the graph is directed or undirected.
        </p>
        <h3 key="h3-11-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.1 Cycle Detection in an Undirected Graph
        </h3>
        <p key="p-11-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-11-17" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 — 1
|   |
3 — 2`}</code>
          </pre>
        </div>
        <p key="p-11-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There is a cycle:
        </p>
        <div key="code-11-23" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2 → 3 → 0`}</code>
          </pre>
        </div>
        <h4 key="h4-11-24" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          The Parent Concept
        </h4>
        <p key="p-11-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In an undirected graph, if we move from vertex 0 to vertex 1, vertex 1 will also have vertex 0 in its adjacency list.
        </p>
        <p key="p-11-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We cannot automatically consider returning to vertex 0 a cycle.
        </p>
        <p key="p-11-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It is simply the edge we just used to arrive at vertex 1.
        </p>
        <p key="p-11-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, while using DFS, we maintain the parent vertex.
        </p>
        <p key="p-11-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The logic is:
        </p>
        <ul key="ul-11-38" className="my-3 space-y-1.5 pl-2">
          <li key="li-11-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>If a neighbor is unvisited, continue DFS.</span>
          </li>
          <li key="li-11-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>If a neighbor is already visited and is not the parent, we found a cycle.</span>
          </li>
        </ul>
        <h4 key="h4-11-39" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation Using DFS
        </h4>
        <p key="p-11-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This standard version assumes a simple undirected graph without parallel edges.
        </p>
        <div key="code-11-125" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class UndirectedCycleDetection {

    public static boolean hasCycle(
        List<List<Integer>> adj,
        int current,
        int parent,
        boolean[] visited
    ) {

        visited[current] = true;

        for (int neighbor : adj.get(current)) {

            if (!visited[neighbor]) {

                if (hasCycle(
                    adj,
                    neighbor,
                    current,
                    visited
                )) {
                    return true;
                }

            } else if (neighbor != parent) {

                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {

        int n = 4;

        List<List<Integer>> adj =
            new ArrayList<>();

        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        addEdge(adj, 0, 1);
        addEdge(adj, 1, 2);
        addEdge(adj, 2, 3);
        addEdge(adj, 3, 0);

        boolean[] visited = new boolean[n];

        boolean cycleFound = false;

        for (int i = 0; i < n; i++) {

            if (!visited[i]) {

                if (hasCycle(adj, i, -1, visited)) {

                    cycleFound = true;
                    break;
                }
            }
        }

        System.out.println(cycleFound);
    }

    static void addEdge(
        List<List<Integer>> adj,
        int u,
        int v
    ) {

        adj.get(u).add(v);
        adj.get(v).add(u);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-126" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-11-131" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <h4 key="h4-11-132" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Why Does the Parent Check Work?
        </h4>
        <p key="p-11-134" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose DFS travels:
        </p>
        <div key="code-11-139" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2`}</code>
          </pre>
        </div>
        <p key="p-11-140" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          At vertex 1, the neighbor 0 is already visited, but 0 is the parent of 1.
        </p>
        <p key="p-11-142" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, it is not a cycle.
        </p>
        <p key="p-11-144" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now suppose vertex 2 has an edge to vertex 0.
        </p>
        <p key="p-11-146" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Vertex 0 is already visited and is not the parent of 2.
        </p>
        <p key="p-11-148" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          That indicates a cycle.
        </p>
        <p key="p-11-150" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Advanced note:</strong> If the graph can contain parallel edges, parent vertex alone is insufficient. You should track the exact edge ID used to enter a vertex, so a second parallel edge to the parent is correctly recognized as a cycle.
        </p>
        <h3 key="h3-11-152" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.2 Cycle Detection in a Directed Graph
        </h3>
        <p key="p-11-154" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Directed cycle detection requires a different technique.
        </p>
        <p key="p-11-156" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-11-163" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2
    ↑   |
    └───┘`}</code>
          </pre>
        </div>
        <p key="p-11-164" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There is a directed cycle between vertices 1 and 2.
        </p>
        <p key="p-11-166" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We use three states instead of a simple visited array.
        </p>
        <div key="table-11-173" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-11-0" className="p-3 font-semibold">State</th>
                <th key="th-11-1" className="p-3 font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-11-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-11-0-0" className="p-3 text-stone-700 font-mono text-stone-800">0</td>
                <td key="td-11-0-1" className="p-3 text-stone-700 ">Not visited</td>
              </tr>
              <tr key="tr-11-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-11-1-0" className="p-3 text-stone-700 font-mono text-stone-800">1</td>
                <td key="td-11-1-1" className="p-3 text-stone-700 ">Currently in the DFS recursion path</td>
              </tr>
              <tr key="tr-11-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-11-2-0" className="p-3 text-stone-700 font-mono text-stone-800">2</td>
                <td key="td-11-2-1" className="p-3 text-stone-700 ">Fully processed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-11-174" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These states are sometimes called white, gray, and black.
        </p>
        <p key="p-11-176" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The important rule is:
        </p>
        <p key="p-11-178" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">If DFS reaches a vertex that is already in the current recursion path, a directed cycle exists.</strong>
        </p>
        <p key="p-11-180" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Reaching a fully processed vertex does not by itself indicate a cycle.
        </p>
        <h4 key="h4-11-182" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-11-238" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class DirectedCycleDetection {

    public static boolean dfs(
        List<List<Integer>> adj,
        int current,
        int[] state
    ) {

        state[current] = 1;

        for (int neighbor : adj.get(current)) {

            if (state[neighbor] == 1) {
                return true;
            }

            if (state[neighbor] == 0) {

                if (dfs(adj, neighbor, state)) {
                    return true;
                }
            }
        }

        state[current] = 2;

        return false;
    }

    public static boolean hasCycle(
        List<List<Integer>> adj
    ) {

        int n = adj.size();

        int[] state = new int[n];

        for (int i = 0; i < n; i++) {

            if (state[i] == 0) {

                if (dfs(adj, i, state)) {
                    return true;
                }
            }
        }

        return false;
    }
}`}</code>
          </pre>
        </div>
        <h4 key="h4-11-239" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Complexity
        </h4>
        <p key="p-11-241" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Both directed and undirected cycle detection using adjacency lists take:
        </p>
        <div key="eq-11-244" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-11-245" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Space:
        </p>
        <div key="eq-11-248" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V) \\"}
        </div>
        <p key="p-11-249" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          for visited states and the recursion stack.
        </p>
      </div>
    )
  },
  {
    id: 12,
    title: "12. Bipartite Graphs & Two-Coloring",
    category: "Graph Properties",
    content: (
      <div className="space-y-4">
        <p key="p-12-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A bipartite graph is a graph whose vertices can be divided into two separate sets such that every edge connects a vertex from one set to a vertex in the other set.
        </p>
        <p key="p-12-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There must be no edge connecting two vertices within the same set.
        </p>
        <h3 key="h3-12-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.1 Understanding Bipartite Graphs
        </h3>
        <p key="p-12-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose we have a graph representing students and courses.
        </p>
        <div key="code-12-14" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Set A: Students
Set B: Courses`}</code>
          </pre>
        </div>
        <p key="p-12-15" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An edge connects a student to a course in which that student is enrolled.
        </p>
        <p key="p-12-17" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There should be no direct student-to-student edge or course-to-course edge in this particular two-part relationship model.
        </p>
        <p key="p-12-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Another way to understand a bipartite graph is to color its vertices using two colors.
        </p>
        <p key="p-12-21" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If we can color every vertex without two adjacent vertices receiving the same color, the graph is bipartite.
        </p>
        <h3 key="h3-12-23" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.2 Example of a Bipartite Graph
        </h3>
        <p key="p-12-25" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Two-colorable graph</strong>
        </p>
        <p key="p-12-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Color 0
        </p>
        <p key="p-12-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Color 1
        </p>
        <h3 key="h3-12-31" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.3 Important Property: Odd Cycles
        </h3>
        <p key="p-12-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An undirected graph is bipartite if and only if it contains no odd-length cycle.
        </p>
        <p key="p-12-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-12-39" className="my-3 space-y-1.5 pl-2">
          <li key="li-12-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>A triangle has three edges and forms an odd cycle. It is not bipartite.</span>
          </li>
          <li key="li-12-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>A square has four edges and forms an even cycle. It is bipartite.</span>
          </li>
        </ul>
        <p key="p-12-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-12-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When we alternate colors around a cycle, an odd cycle eventually forces two adjacent vertices to have the same color.
        </p>
        <h3 key="h3-12-44" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.4 Greedy-Style BFS Coloring
        </h3>
        <p key="p-12-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We can solve this problem using BFS.
        </p>
        <p key="p-12-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Strategy:
        </p>
        <ol key="ol-12-56" className="my-3 space-y-2 pl-2">
          <li key="oli-12-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Create a color array initialized to -1.</span>
          </li>
          <li key="oli-12-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Choose an uncolored vertex.</span>
          </li>
          <li key="oli-12-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Assign color 0.</span>
          </li>
          <li key="oli-12-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Assign the opposite color to every uncolored neighbor.</span>
          </li>
          <li key="oli-12-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>If an adjacent vertex already has the same color, the graph is not bipartite.</span>
          </li>
          <li key="oli-12-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Repeat for every disconnected component.</span>
          </li>
        </ol>
        <h4 key="h4-12-57" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-12-110" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class BipartiteGraph {

    public static boolean isBipartite(
        List<List<Integer>> adj
    ) {

        int n = adj.size();

        int[] color = new int[n];

        Arrays.fill(color, -1);

        Queue<Integer> queue =
            new ArrayDeque<>();

        for (int start = 0; start < n; start++) {

            if (color[start] != -1) {
                continue;
            }

            color[start] = 0;
            queue.offer(start);

            while (!queue.isEmpty()) {

                int u = queue.poll();

                for (int v : adj.get(u)) {

                    if (color[v] == -1) {

                        color[v] = 1 - color[u];

                        queue.offer(v);

                    } else if (color[v] == color[u]) {

                        return false;
                    }
                }
            }
        }

        return true;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-12-111" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The expression:
        </p>
        <div key="code-12-116" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 - color[u]`}</code>
          </pre>
        </div>
        <p key="p-12-117" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          switches the color:
        </p>
        <div key="code-12-123" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1
1 → 0`}</code>
          </pre>
        </div>
        <h4 key="h4-12-124" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Complexity
        </h4>
        <p key="p-12-126" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Time:
        </p>
        <div key="eq-12-129" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-12-130" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Space:
        </p>
        <div key="eq-12-133" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V) \\"}
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "13. Topological Sorting & DAGs",
    category: "Topological Sorting",
    content: (
      <div className="space-y-4">
        <p key="p-13-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Topological sorting is an important technique used in directed acyclic graphs.
        </p>
        <p key="p-13-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It arranges vertices in an order that respects all directed dependencies.
        </p>
        <h3 key="h3-13-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.1 What Is Topological Sorting?
        </h3>
        <p key="p-13-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose you have several courses.
        </p>
        <p key="p-13-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Some courses require other courses to be completed first.
        </p>
        <p key="p-13-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <div key="code-13-21" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Programming Fundamentals → Data Structures

Data Structures → Algorithms

Mathematics → Machine Learning`}</code>
          </pre>
        </div>
        <p key="p-13-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          You cannot study Algorithms before learning Data Structures if that dependency is mandatory.
        </p>
        <p key="p-13-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A topological ordering provides a valid sequence that respects these relationships.
        </p>
        <h3 key="h3-13-26" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.2 Directed Acyclic Graph (DAG)
        </h3>
        <p key="p-13-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Topological sorting is possible only if the directed graph is acyclic.
        </p>
        <p key="p-13-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A directed acyclic graph is called a DAG.
        </p>
        <p key="p-13-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-13-39" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 3
 \\      ↑
  → 2 ──`}</code>
          </pre>
        </div>
        <p key="p-13-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          One valid topological ordering is:
        </p>
        <div key="code-13-45" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0, 1, 2, 3`}</code>
          </pre>
        </div>
        <p key="p-13-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Another valid ordering might be:
        </p>
        <div key="code-13-51" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0, 2, 1, 3`}</code>
          </pre>
        </div>
        <p key="p-13-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There may be more than one valid ordering.
        </p>
        <p key="p-13-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          But consider:
        </p>
        <div key="code-13-59" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2 → 0`}</code>
          </pre>
        </div>
        <p key="p-13-60" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This graph contains a directed cycle.
        </p>
        <p key="p-13-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A valid topological ordering is impossible because every vertex in the cycle would need to come before another vertex in that same cycle.
        </p>
        <h3 key="h3-13-64" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.3 Applications of Topological Sorting
        </h3>
        <ul key="ul-13-74" className="my-3 space-y-1.5 pl-2">
          <li key="li-13-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Course prerequisite scheduling.</span>
          </li>
          <li key="li-13-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Software build systems.</span>
          </li>
          <li key="li-13-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Task dependency management.</span>
          </li>
          <li key="li-13-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Package installation.</span>
          </li>
          <li key="li-13-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Compilation order.</span>
          </li>
          <li key="li-13-5" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Workflow execution.</span>
          </li>
          <li key="li-13-6" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Project planning.</span>
          </li>
          <li key="li-13-7" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Dependency resolution.</span>
          </li>
        </ul>
        <h3 key="h3-13-75" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.4 Two Ways to Perform Topological Sorting
        </h3>
        <ol key="ol-13-79" className="my-3 space-y-2 pl-2">
          <li key="oli-13-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>DFS-based topological sorting.</span>
          </li>
          <li key="oli-13-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Kahn&apos;s algorithm using in-degree and a queue.</span>
          </li>
        </ol>
        <p key="p-13-80" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We will concentrate on Kahn&apos;s algorithm because it is explicitly included in this module.
        </p>
      </div>
    )
  },
  {
    id: 14,
    title: "14. Kahn's Algorithm (BFS Topological Sort)",
    category: "Topological Sorting",
    content: (
      <div className="space-y-4">
        <p key="p-14-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Kahn&apos;s algorithm is a BFS-based approach to topological sorting.
        </p>
        <p key="p-14-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It uses the in-degree of every vertex.
        </p>
        <h3 key="h3-14-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.1 What Is In-Degree?
        </h3>
        <p key="p-14-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In a directed graph, in-degree is the number of edges entering a particular vertex.
        </p>
        <p key="p-14-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-14-17" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 2
1 → 2
2 → 3`}</code>
          </pre>
        </div>
        <p key="p-14-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The in-degrees are:
        </p>
        <div key="table-14-26" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-14-0" className="p-3 font-semibold">Vertex</th>
                <th key="th-14-1" className="p-3 font-semibold">In-degree</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-14-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-0-0" className="p-3 text-stone-700 font-mono text-stone-800">0</td>
                <td key="td-14-0-1" className="p-3 text-stone-700 ">0</td>
              </tr>
              <tr key="tr-14-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-1-0" className="p-3 text-stone-700 font-mono text-stone-800">1</td>
                <td key="td-14-1-1" className="p-3 text-stone-700 ">0</td>
              </tr>
              <tr key="tr-14-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-2-0" className="p-3 text-stone-700 font-mono text-stone-800">2</td>
                <td key="td-14-2-1" className="p-3 text-stone-700 ">2</td>
              </tr>
              <tr key="tr-14-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-3-0" className="p-3 text-stone-700 font-mono text-stone-800">3</td>
                <td key="td-14-3-1" className="p-3 text-stone-700 ">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-14-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Vertices 0 and 1 have no prerequisites.
        </p>
        <p key="p-14-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          They can be processed first.
        </p>
        <h3 key="h3-14-31" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.2 Kahn&apos;s Algorithm Logic
        </h3>
        <p key="p-14-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The main idea:
        </p>
        <p key="p-14-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">A vertex with in-degree zero has no incoming dependencies and can safely be placed next in the topological ordering.</strong>
        </p>
        <p key="p-14-37" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Algorithm:
        </p>
        <ol key="ol-14-46" className="my-3 space-y-2 pl-2">
          <li key="oli-14-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Calculate the in-degree of every vertex.</span>
          </li>
          <li key="oli-14-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Insert all vertices with in-degree zero into a queue.</span>
          </li>
          <li key="oli-14-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Remove a vertex from the queue.</span>
          </li>
          <li key="oli-14-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Add it to the topological ordering.</span>
          </li>
          <li key="oli-14-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>Remove its outgoing edges conceptually by decreasing its neighbors&apos; in-degree.</span>
          </li>
          <li key="oli-14-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>If a neighbor&apos;s in-degree becomes zero, insert it into the queue.</span>
          </li>
          <li key="oli-14-6" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              7
            </span>
            <span>Continue until the queue becomes empty.</span>
          </li>
        </ol>
        <p key="p-14-47" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If the number of processed vertices is less than V, the graph contains a directed cycle.
        </p>
        <h3 key="h3-14-49" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.3 Java Implementation
        </h3>
        <div key="code-14-146" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class KahnsAlgorithm {

    public static List<Integer> topologicalSort(
        List<List<Integer>> adj
    ) {

        int n = adj.size();

        int[] indegree = new int[n];

        // Calculate in-degree
        for (int u = 0; u < n; u++) {

            for (int v : adj.get(u)) {

                indegree[v]++;
            }
        }

        Queue<Integer> queue =
            new ArrayDeque<>();

        // Add vertices with zero in-degree
        for (int i = 0; i < n; i++) {

            if (indegree[i] == 0) {

                queue.offer(i);
            }
        }

        List<Integer> order =
            new ArrayList<>();

        while (!queue.isEmpty()) {

            int u = queue.poll();

            order.add(u);

            for (int v : adj.get(u)) {

                indegree[v]--;

                if (indegree[v] == 0) {

                    queue.offer(v);
                }
            }
        }

        // Detect a directed cycle
        if (order.size() != n) {

            return new ArrayList<>();
        }

        return order;
    }

    public static void main(String[] args) {

        int n = 4;

        List<List<Integer>> adj =
            new ArrayList<>();

        for (int i = 0; i < n; i++) {

            adj.add(new ArrayList<>());
        }

        adj.get(0).add(2);
        adj.get(1).add(2);
        adj.get(2).add(3);

        List<Integer> result =
            topologicalSort(adj);

        if (result.isEmpty()) {

            System.out.println(
                "Graph contains a cycle."
            );

        } else {

            System.out.println(result);
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-147" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Possible output:
        </p>
        <div key="code-14-152" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 1, 2, 3]`}</code>
          </pre>
        </div>
        <h3 key="h3-14-153" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.4 Dry Run
        </h3>
        <p key="p-14-155" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Graph:
        </p>
        <div key="code-14-162" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 2
1 → 2
2 → 3`}</code>
          </pre>
        </div>
        <p key="p-14-163" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initial in-degree:
        </p>
        <div key="code-14-171" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 = 0
1 = 0
2 = 2
3 = 1`}</code>
          </pre>
        </div>
        <p key="p-14-172" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initial queue:
        </p>
        <div key="code-14-177" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 1]`}</code>
          </pre>
        </div>
        <p key="p-14-178" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Processing:
        </p>
        <div key="table-14-186" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-14-0" className="p-3 font-semibold">Step</th>
                <th key="th-14-1" className="p-3 font-semibold">Vertex removed</th>
                <th key="th-14-2" className="p-3 font-semibold">Updated in-degree</th>
                <th key="th-14-3" className="p-3 font-semibold">Queue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-14-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-0-0" className="p-3 text-stone-700 font-mono text-stone-800">1</td>
                <td key="td-14-0-1" className="p-3 text-stone-700 ">0</td>
                <td key="td-14-0-2" className="p-3 text-stone-700 ">2 becomes 1</td>
                <td key="td-14-0-3" className="p-3 text-stone-700 ">[1]</td>
              </tr>
              <tr key="tr-14-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-1-0" className="p-3 text-stone-700 font-mono text-stone-800">2</td>
                <td key="td-14-1-1" className="p-3 text-stone-700 ">1</td>
                <td key="td-14-1-2" className="p-3 text-stone-700 ">2 becomes 0</td>
                <td key="td-14-1-3" className="p-3 text-stone-700 ">[2]</td>
              </tr>
              <tr key="tr-14-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-2-0" className="p-3 text-stone-700 font-mono text-stone-800">3</td>
                <td key="td-14-2-1" className="p-3 text-stone-700 ">2</td>
                <td key="td-14-2-2" className="p-3 text-stone-700 ">3 becomes 0</td>
                <td key="td-14-2-3" className="p-3 text-stone-700 ">[3]</td>
              </tr>
              <tr key="tr-14-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-14-3-0" className="p-3 text-stone-700 font-mono text-stone-800">4</td>
                <td key="td-14-3-1" className="p-3 text-stone-700 ">3</td>
                <td key="td-14-3-2" className="p-3 text-stone-700 ">No outgoing edges</td>
                <td key="td-14-3-3" className="p-3 text-stone-700 ">[]</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-14-187" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Final ordering:
        </p>
        <div key="code-14-192" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2 → 3`}</code>
          </pre>
        </div>
        <h3 key="h3-14-193" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.5 Complexity
        </h3>
        <p key="p-14-195" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Time:
        </p>
        <div key="eq-14-198" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-14-199" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Space:
        </p>
        <div key="eq-14-202" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V) \\"}
        </div>
        <p key="p-14-203" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The adjacency list is not copied or modified. The algorithm uses an additional in-degree array and queue.
        </p>
        <h3 key="h3-14-205" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.6 DFS-Based Topological Sorting
        </h3>
        <p key="p-14-207" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There is another common approach.
        </p>
        <p key="p-14-209" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We recursively visit every neighbor and append a vertex only after all its outgoing neighbors have been processed.
        </p>
        <p key="p-14-211" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This creates a finishing order.
        </p>
        <p key="p-14-213" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Reversing the finishing order gives a topological ordering, provided the graph is acyclic.
        </p>
        <p key="p-14-215" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Cycle detection must be included using the three DFS states discussed earlier.
        </p>
        <p key="p-14-217" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Kahn&apos;s algorithm has the advantage that it can also identify whether the graph contains a cycle by checking how many vertices were processed.
        </p>
      </div>
    )
  },
  {
    id: 15,
    title: "15. Strongly Connected Components (SCC)",
    category: "Strong Connectivity",
    content: (
      <div className="space-y-4">
        <p key="p-15-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Strongly Connected Components are an advanced graph concept used mainly in directed graphs.
        </p>
        <p key="p-15-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Before understanding Kosaraju&apos;s and Tarjan&apos;s algorithms, you need to understand what makes a group of vertices strongly connected.
        </p>
        <h3 key="h3-15-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.1 What Is a Strongly Connected Component?
        </h3>
        <p key="p-15-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A strongly connected component is a maximal group of vertices in a directed graph in which every vertex can reach every other vertex by following directed edges.
        </p>
        <p key="p-15-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-15-20" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2
↑   ↓   |
└───┘   ↓
        3 → 4
        ↑   |
        └───┘`}</code>
          </pre>
        </div>
        <p key="p-15-21" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose the graph contains:
        </p>
        <div key="code-15-31" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1
1 → 2
2 → 0
1 → 3
3 → 4
4 → 3`}</code>
          </pre>
        </div>
        <p key="p-15-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We have two strongly connected components:
        </p>
        <div key="code-15-39" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`SCC 1 = {0, 1, 2}

SCC 2 = {3, 4}`}</code>
          </pre>
        </div>
        <p key="p-15-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-15-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Within the first group:
        </p>
        <ul key="ul-15-47" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>0 can reach 1 and 2.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>1 can reach 2 and 0.</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>2 can reach 0 and 1.</span>
          </li>
        </ul>
        <p key="p-15-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Within the second group:
        </p>
        <ul key="ul-15-52" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>3 can reach 4.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>4 can reach 3.</span>
          </li>
        </ul>
        <p key="p-15-53" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          However, there is no path from vertices 3 or 4 back to vertices 0, 1, or 2.
        </p>
        <p key="p-15-55" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, these are separate SCCs.
        </p>
        <h3 key="h3-15-57" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.2 Connected vs Strongly Connected
        </h3>
        <div key="table-15-65" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-15-0" className="p-3 font-semibold">Feature</th>
                <th key="th-15-1" className="p-3 font-semibold">Connected component</th>
                <th key="th-15-2" className="p-3 font-semibold">Strongly connected component</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-15-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-15-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Graph type</td>
                <td key="td-15-0-1" className="p-3 text-stone-700 ">Usually undirected</td>
                <td key="td-15-0-2" className="p-3 text-stone-700 ">Directed</td>
              </tr>
              <tr key="tr-15-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-15-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Connectivity</td>
                <td key="td-15-1-1" className="p-3 text-stone-700 ">Paths exist between vertices</td>
                <td key="td-15-1-2" className="p-3 text-stone-700 ">Directed paths exist both ways</td>
              </tr>
              <tr key="tr-15-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-15-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Direction matters</td>
                <td key="td-15-2-1" className="p-3 text-stone-700 ">No</td>
                <td key="td-15-2-2" className="p-3 text-stone-700 ">Yes</td>
              </tr>
              <tr key="tr-15-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-15-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Algorithms</td>
                <td key="td-15-3-1" className="p-3 text-stone-700 ">BFS and DFS</td>
                <td key="td-15-3-2" className="p-3 text-stone-700 ">Kosaraju and Tarjan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-15-66" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A strongly connected component must be maximal. In other words, we cannot add another vertex without breaking the property that every pair of vertices is mutually reachable.
        </p>
        <h3 key="h3-15-68" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.3 Applications of SCC
        </h3>
        <p key="p-15-70" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Strongly connected components are useful in:
        </p>
        <ul key="ul-15-80" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Social network relationship analysis.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Dependency analysis.</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Webpage link analysis.</span>
          </li>
          <li key="li-15-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Detecting mutually dependent modules.</span>
          </li>
          <li key="li-15-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Compiler optimization.</span>
          </li>
          <li key="li-15-5" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Program control-flow analysis.</span>
          </li>
          <li key="li-15-6" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Finding cyclic regions in directed graphs.</span>
          </li>
          <li key="li-15-7" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Analyzing communication networks.</span>
          </li>
        </ul>
        <p key="p-15-81" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are two important linear-time algorithms for finding SCCs:
        </p>
        <ol key="ol-15-85" className="my-3 space-y-2 pl-2">
          <li key="oli-15-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Kosaraju&apos;s Algorithm.</span>
          </li>
          <li key="oli-15-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Tarjan&apos;s Algorithm.</span>
          </li>
        </ol>
      </div>
    )
  },
  {
    id: 16,
    title: "16. Kosaraju's Two-Pass SCC Algorithm",
    category: "Strong Connectivity",
    content: (
      <div className="space-y-4">
        <p key="p-16-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Kosaraju&apos;s algorithm finds all strongly connected components in a directed graph.
        </p>
        <p key="p-16-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It performs two DFS passes and uses the graph&apos;s transpose.
        </p>
        <h3 key="h3-16-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.1 What Is a Transpose Graph?
        </h3>
        <p key="p-16-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The transpose of a directed graph is created by reversing every edge.
        </p>
        <p key="p-16-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose the original graph contains:
        </p>
        <div key="code-16-18" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1
1 → 2
2 → 0
1 → 3`}</code>
          </pre>
        </div>
        <p key="p-16-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Its transpose contains:
        </p>
        <div key="code-16-27" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 → 0
2 → 1
0 → 2
3 → 1`}</code>
          </pre>
        </div>
        <p key="p-16-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Mathematically:
        </p>
        <div key="eq-16-31" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"G^T=(V,E^T) \\"}
        </div>
        <p key="p-16-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Where every original edge:
        </p>
        <div key="eq-16-35" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"(u,v) \\"}
        </div>
        <p key="p-16-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          becomes:
        </p>
        <div key="eq-16-39" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"(v,u) \\"}
        </div>
        <h3 key="h3-16-40" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.2 The Two-Pass Strategy
        </h3>
        <p key="p-16-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Kosaraju&apos;s algorithm works as follows.
        </p>
        <p key="p-16-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">First DFS pass:</strong>
        </p>
        <ol key="ol-16-49" className="my-3 space-y-2 pl-2">
          <li key="oli-16-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Visit all vertices.</span>
          </li>
          <li key="oli-16-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>When a DFS call finishes, add that vertex to a finishing-order list.</span>
          </li>
          <li key="oli-16-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Continue until every vertex has been processed.</span>
          </li>
        </ol>
        <p key="p-16-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Second DFS pass:</strong>
        </p>
        <ol key="ol-16-56" className="my-3 space-y-2 pl-2">
          <li key="oli-16-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Reverse every directed edge to construct the transpose graph.</span>
          </li>
          <li key="oli-16-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Process vertices in decreasing order of their finishing times.</span>
          </li>
          <li key="oli-16-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Run DFS on the transpose graph.</span>
          </li>
          <li key="oli-16-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Every DFS traversal identifies one strongly connected component.</span>
          </li>
        </ol>
        <h4 key="h4-16-57" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Why Does the Ordering Matter?
        </h4>
        <p key="p-16-59" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider a graph containing two SCCs:
        </p>
        <div key="code-16-64" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`SCC A → SCC B`}</code>
          </pre>
        </div>
        <p key="p-16-65" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There is a path from SCC A to SCC B, but not from B to A.
        </p>
        <p key="p-16-67" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          During the first DFS pass, the finishing times help establish an order in which, during the second pass on the reversed graph, DFS cannot accidentally combine distinct SCCs.
        </p>
        <p key="p-16-69" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The transpose reverses the direction between components.
        </p>
        <p key="p-16-71" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Processing vertices in decreasing finishing-time order ensures that each second-pass traversal discovers exactly one SCC.
        </p>
        <h3 key="h3-16-73" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.3 Step-by-Step Example
        </h3>
        <p key="p-16-75" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Original graph:
        </p>
        <div key="code-16-87" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1
1 → 2
2 → 0

1 → 3

3 → 4
4 → 3`}</code>
          </pre>
        </div>
        <p key="p-16-88" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          First DFS produces a finishing order. The exact order depends on adjacency-list traversal order.
        </p>
        <p key="p-16-90" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <div key="code-16-96" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Finishing order:
[4, 3, 2, 1, 0]`}</code>
          </pre>
        </div>
        <p key="p-16-97" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Reverse finishing order:
        </p>
        <div key="code-16-102" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 1, 2, 3, 4]`}</code>
          </pre>
        </div>
        <p key="p-16-103" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Construct the transpose and perform DFS in this order.
        </p>
        <p key="p-16-105" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The results are:
        </p>
        <div key="code-16-112" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Component 1: {0, 1, 2}

Component 2: {3, 4}`}</code>
          </pre>
        </div>
        <h3 key="h3-16-113" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.4 Java Implementation
        </h3>
        <div key="code-16-271" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class Kosaraju {

    // First DFS: calculate finishing order
    static void dfsOrder(
        int u,
        List<List<Integer>> adj,
        boolean[] visited,
        List<Integer> order
    ) {

        visited[u] = true;

        for (int v : adj.get(u)) {

            if (!visited[v]) {

                dfsOrder(
                    v,
                    adj,
                    visited,
                    order
                );
            }
        }

        // Add after all descendants are processed
        order.add(u);
    }

    // Second DFS: collect one SCC
    static void dfsCollect(
        int u,
        List<List<Integer>> transpose,
        boolean[] visited,
        List<Integer> component
    ) {

        visited[u] = true;

        component.add(u);

        for (int v : transpose.get(u)) {

            if (!visited[v]) {

                dfsCollect(
                    v,
                    transpose,
                    visited,
                    component
                );
            }
        }
    }

    public static List<List<Integer>> findSCCs(
        List<List<Integer>> adj
    ) {

        int n = adj.size();

        boolean[] visited = new boolean[n];

        List<Integer> order = new ArrayList<>();

        // STEP 1: First DFS pass
        for (int i = 0; i < n; i++) {

            if (!visited[i]) {

                dfsOrder(
                    i,
                    adj,
                    visited,
                    order
                );
            }
        }

        // STEP 2: Construct transpose
        List<List<Integer>> transpose =
            new ArrayList<>();

        for (int i = 0; i < n; i++) {

            transpose.add(new ArrayList<>());
        }

        for (int u = 0; u < n; u++) {

            for (int v : adj.get(u)) {

                transpose.get(v).add(u);
            }
        }

        // STEP 3: Reset visited
        Arrays.fill(visited, false);

        List<List<Integer>> components =
            new ArrayList<>();

        // STEP 4: Second DFS in reverse finishing order
        for (int i = order.size() - 1; i >= 0; i--) {

            int u = order.get(i);

            if (!visited[u]) {

                List<Integer> component =
                    new ArrayList<>();

                dfsCollect(
                    u,
                    transpose,
                    visited,
                    component
                );

                components.add(component);
            }
        }

        return components;
    }

    public static void main(String[] args) {

        int n = 5;

        List<List<Integer>> adj =
            new ArrayList<>();

        for (int i = 0; i < n; i++) {

            adj.add(new ArrayList<>());
        }

        adj.get(0).add(1);
        adj.get(1).add(2);
        adj.get(2).add(0);

        adj.get(1).add(3);

        adj.get(3).add(4);
        adj.get(4).add(3);

        System.out.println(
            findSCCs(adj)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-16-272" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output will contain the two groups:
        </p>
        <div key="code-16-277" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[0, 1, 2], [3, 4]]`}</code>
          </pre>
        </div>
        <p key="p-16-278" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The order of vertices inside a component and the order of components can differ depending on traversal order.
        </p>
        <h3 key="h3-16-280" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.5 Complexity Analysis
        </h3>
        <p key="p-16-282" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          First DFS:
        </p>
        <div key="eq-16-285" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-16-286" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Transpose construction:
        </p>
        <div key="eq-16-289" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-16-290" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Second DFS:
        </p>
        <div key="eq-16-293" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-16-294" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Total:
        </p>
        <div key="eq-16-297" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"\\boxed{O(V+E)} \\"}
        </div>
        <p key="p-16-298" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Space:
        </p>
        <div key="eq-16-301" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-16-302" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We need:
        </p>
        <ul key="ul-16-309" className="my-3 space-y-1.5 pl-2">
          <li key="li-16-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Transpose adjacency list.</span>
          </li>
          <li key="li-16-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Visited array.</span>
          </li>
          <li key="li-16-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Finishing-order list.</span>
          </li>
          <li key="li-16-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Recursion stack.</span>
          </li>
          <li key="li-16-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Result components.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 17,
    title: "17. Tarjan's SCC Algorithm (Discovery & Low-Link)",
    category: "Strong Connectivity",
    content: (
      <div className="space-y-4">
        <p key="p-17-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Tarjan&apos;s algorithm is another efficient way to find strongly connected components.
        </p>
        <p key="p-17-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Unlike Kosaraju&apos;s algorithm, it does not need to construct a transpose graph.
        </p>
        <p key="p-17-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It performs a single DFS traversal while maintaining additional information.
        </p>
        <p key="p-17-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The important concepts are:
        </p>
        <ul key="ul-17-14" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Discovery time.</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Low-link value.</span>
          </li>
          <li key="li-17-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>DFS stack.</span>
          </li>
          <li key="li-17-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>On-stack status.</span>
          </li>
        </ul>
        <h3 key="h3-17-15" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.1 Discovery Time
        </h3>
        <p key="p-17-17" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Discovery time represents the moment a vertex is first visited by DFS.
        </p>
        <p key="p-17-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <div key="code-17-27" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Vertex 0 → Discovery time 0
Vertex 1 → Discovery time 1
Vertex 2 → Discovery time 2
Vertex 3 → Discovery time 3`}</code>
          </pre>
        </div>
        <p key="p-17-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We can maintain a global timer that increases each time we discover a vertex.
        </p>
        <div key="code-17-33" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`discovery[u] = timer++;`}</code>
          </pre>
        </div>
        <h3 key="h3-17-34" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.2 Low-Link Value
        </h3>
        <p key="p-17-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The low-link value tells us the smallest discovery time reachable from a vertex through:
        </p>
        <ul key="ul-17-40" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>DFS tree edges.</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Back edges to vertices that are still on the current DFS stack.</span>
          </li>
        </ul>
        <p key="p-17-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a vertex u, its low-link value is:
        </p>
        <div key="eq-17-44" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"low[u] \\"}
        </div>
        <p key="p-17-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This value helps us identify whether a group of vertices forms a strongly connected component.
        </p>
        <p key="p-17-47" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are two important update cases.
        </p>
        <p key="p-17-49" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Case 1: A neighbor is unvisited.</strong>
        </p>
        <p key="p-17-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We recursively explore the neighbor.
        </p>
        <p key="p-17-53" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          After returning:
        </p>
        <div key="eq-17-56" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"low[u]=\\min(low[u],low[v]) \\"}
        </div>
        <p key="p-17-57" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Case 2: A neighbor is already on the DFS stack.</strong>
        </p>
        <p key="p-17-59" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We update using its discovery time:
        </p>
        <div key="eq-17-62" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"low[u]=\\min(low[u],disc[v]) \\"}
        </div>
        <p key="p-17-63" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Notice that we use <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">disc[v]</code> in the second case, not <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">low[v]</code>.
        </p>
        <p key="p-17-65" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A visited vertex that has already been removed from the stack should not be used to establish this SCC relationship.
        </p>
        <h3 key="h3-17-67" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.3 When Is an SCC Found?
        </h3>
        <p key="p-17-69" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The key condition is:
        </p>
        <div key="eq-17-72" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"low[u]=disc[u] \\"}
        </div>
        <p key="p-17-73" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When this condition is true, vertex u is the root of an SCC in the current DFS traversal.
        </p>
        <p key="p-17-75" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We then remove vertices from the DFS stack until u is removed.
        </p>
        <p key="p-17-77" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          All removed vertices belong to the same SCC.
        </p>
        <h3 key="h3-17-79" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.4 Java Implementation
        </h3>
        <div key="code-17-222" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class TarjanSCC {

    private List<List<Integer>> adj;

    private int[] discovery;
    private int[] low;

    private boolean[] onStack;

    private Deque<Integer> stack;

    private int timer = 0;

    private List<List<Integer>> components;

    public TarjanSCC(
        List<List<Integer>> adj
    ) {

        this.adj = adj;

        int n = adj.size();

        discovery = new int[n];

        low = new int[n];

        onStack = new boolean[n];

        Arrays.fill(discovery, -1);

        stack = new ArrayDeque<>();

        components = new ArrayList<>();
    }

    private void dfs(int u) {

        discovery[u] = timer;

        low[u] = timer;

        timer++;

        stack.push(u);

        onStack[u] = true;

        for (int v : adj.get(u)) {

            // Case 1: Unvisited neighbor
            if (discovery[v] == -1) {

                dfs(v);

                low[u] = Math.min(
                    low[u],
                    low[v]
                );
            }

            // Case 2: Neighbor still in current SCC stack
            else if (onStack[v]) {

                low[u] = Math.min(
                    low[u],
                    discovery[v]
                );
            }
        }

        // Found an SCC root
        if (low[u] == discovery[u]) {

            List<Integer> component =
                new ArrayList<>();

            int v;

            do {

                v = stack.pop();

                onStack[v] = false;

                component.add(v);

            } while (v != u);

            components.add(component);
        }
    }

    public List<List<Integer>> findSCCs() {

        int n = adj.size();

        for (int i = 0; i < n; i++) {

            if (discovery[i] == -1) {

                dfs(i);
            }
        }

        return components;
    }

    public static void main(String[] args) {

        int n = 5;

        List<List<Integer>> adj =
            new ArrayList<>();

        for (int i = 0; i < n; i++) {

            adj.add(new ArrayList<>());
        }

        adj.get(0).add(1);
        adj.get(1).add(2);
        adj.get(2).add(0);

        adj.get(1).add(3);

        adj.get(3).add(4);
        adj.get(4).add(3);

        TarjanSCC tarjan =
            new TarjanSCC(adj);

        System.out.println(
            tarjan.findSCCs()
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-17-223" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Possible output:
        </p>
        <div key="code-17-228" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[4, 3], [2, 1, 0]]`}</code>
          </pre>
        </div>
        <p key="p-17-229" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The component order is reverse-related to the DFS discovery/finishing structure, and members may be listed in stack-pop order.
        </p>
        <h3 key="h3-17-231" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.5 Tarjan vs Kosaraju
        </h3>
        <div key="table-17-242" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-17-0" className="p-3 font-semibold">Feature</th>
                <th key="th-17-1" className="p-3 font-semibold">Kosaraju</th>
                <th key="th-17-2" className="p-3 font-semibold">Tarjan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-17-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-17-0-0" className="p-3 text-stone-700 font-mono text-stone-800">DFS passes</td>
                <td key="td-17-0-1" className="p-3 text-stone-700 ">Two</td>
                <td key="td-17-0-2" className="p-3 text-stone-700 ">One</td>
              </tr>
              <tr key="tr-17-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-17-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Transpose graph</td>
                <td key="td-17-1-1" className="p-3 text-stone-700 ">Required</td>
                <td key="td-17-1-2" className="p-3 text-stone-700 ">Not required</td>
              </tr>
              <tr key="tr-17-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-17-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Uses discovery time</td>
                <td key="td-17-2-1" className="p-3 text-stone-700 ">Finishing order</td>
                <td key="td-17-2-2" className="p-3 text-stone-700 ">Yes</td>
              </tr>
              <tr key="tr-17-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-17-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Uses low-link</td>
                <td key="td-17-3-1" className="p-3 text-stone-700 ">No</td>
                <td key="td-17-3-2" className="p-3 text-stone-700 ">Yes</td>
              </tr>
              <tr key="tr-17-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-17-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Stack</td>
                <td key="td-17-4-1" className="p-3 text-stone-700 ">Recursion stack</td>
                <td key="td-17-4-2" className="p-3 text-stone-700 ">Explicit SCC stack plus recursion</td>
              </tr>
              <tr key="tr-17-5" className="hover:bg-stone-50 transition-colors">
                <td key="td-17-5-0" className="p-3 text-stone-700 font-mono text-stone-800">Time</td>
                <td key="td-17-5-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-17-5-2" className="p-3 text-stone-700 ">O(V + E)</td>
              </tr>
              <tr key="tr-17-6" className="hover:bg-stone-50 transition-colors">
                <td key="td-17-6-0" className="p-3 text-stone-700 font-mono text-stone-800">Additional graph storage</td>
                <td key="td-17-6-1" className="p-3 text-stone-700 ">Transpose</td>
                <td key="td-17-6-2" className="p-3 text-stone-700 ">Not required</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-17-243" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Both algorithms find all strongly connected components efficiently.
        </p>
        <p key="p-17-245" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Important learning point:</strong> Tarjan&apos;s SCC algorithm and Tarjan&apos;s bridge/articulation-point technique are closely related through discovery times and low-link values, but their update rules and final conditions are not interchangeable.
        </p>
      </div>
    )
  },
  {
    id: 18,
    title: "18. Bridges in Graphs (Critical Edges)",
    category: "Critical Connections",
    content: (
      <div className="space-y-4">
        <p key="p-18-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now we move to another important low-link application.
        </p>
        <p key="p-18-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A bridge is an edge whose removal increases the number of connected components in an undirected graph.
        </p>
        <p key="p-18-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In simpler terms:
        </p>
        <p key="p-18-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">A bridge is a connection that, when removed, disconnects part of the graph.</strong>
        </p>
        <h3 key="h3-18-10" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.1 Example
        </h3>
        <p key="p-18-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-18-19" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 — 1 — 2
    |   |
    3 — 4`}</code>
          </pre>
        </div>
        <p key="p-18-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose vertices 1, 2, 3, and 4 form a cycle, and vertex 0 is attached through edge 0–1.
        </p>
        <p key="p-18-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Removing edge 0–1 separates vertex 0 from the rest of the graph.
        </p>
        <p key="p-18-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore:
        </p>
        <div key="code-18-29" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`(0, 1)`}</code>
          </pre>
        </div>
        <p key="p-18-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          is a bridge.
        </p>
        <p key="p-18-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          But removing an edge inside the cycle does not disconnect the cycle because another route still exists.
        </p>
        <h3 key="h3-18-34" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.2 Why Do We Need Bridges?
        </h3>
        <p key="p-18-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Bridge detection is useful in:
        </p>
        <ul key="ul-18-44" className="my-3 space-y-1.5 pl-2">
          <li key="li-18-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Network reliability.</span>
          </li>
          <li key="li-18-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Communication infrastructure.</span>
          </li>
          <li key="li-18-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Road connectivity.</span>
          </li>
          <li key="li-18-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Electrical networks.</span>
          </li>
          <li key="li-18-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Identifying critical links.</span>
          </li>
          <li key="li-18-5" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Dependency and connectivity analysis.</span>
          </li>
        </ul>
        <p key="p-18-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A bridge represents a vulnerable connection.
        </p>
        <h3 key="h3-18-47" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.3 Discovery Time and Low-Link
        </h3>
        <p key="p-18-49" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          To find bridges efficiently, we use DFS.
        </p>
        <p key="p-18-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For each vertex, maintain:
        </p>
        <ul key="ul-18-55" className="my-3 space-y-1.5 pl-2">
          <li key="li-18-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">disc[u]</code>: Discovery time.</span>
          </li>
          <li key="li-18-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">low[u]</code>: Earliest discovery time reachable from u&apos;s DFS subtree using tree edges and at most one back edge to an ancestor.</span>
          </li>
        </ul>
        <p key="p-18-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose we travel through a DFS tree edge:
        </p>
        <div key="code-18-61" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`u → v`}</code>
          </pre>
        </div>
        <p key="p-18-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The crucial condition is:
        </p>
        <div key="eq-18-65" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"\\boxed{low[v] > disc[u]} \\"}
        </div>
        <p key="p-18-66" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When this condition is true, the subtree rooted at v cannot reach u or any ancestor of u without using the edge (u, v).
        </p>
        <p key="p-18-68" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, removing (u, v) disconnects that subtree.
        </p>
        <p key="p-18-70" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          So:
        </p>
        <div key="eq-18-73" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"(u,v) \\text{ is a bridge} \\"}
        </div>
        <h3 key="h3-18-74" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.4 Java Implementation
        </h3>
        <p key="p-18-76" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The following implementation uses edge IDs.
        </p>
        <p key="p-18-78" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is slightly more robust than tracking only a parent vertex because it correctly handles parallel edges.
        </p>
        <div key="code-18-221" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class BridgeFinder {

    static class Edge {

        int to;
        int id;

        Edge(int to, int id) {

            this.to = to;
            this.id = id;
        }
    }

    private List<List<Edge>> adj;

    private int[] disc;
    private int[] low;

    private int timer = 0;

    private List<int[]> bridges =
        new ArrayList<>();

    public BridgeFinder(int n) {

        adj = new ArrayList<>();

        disc = new int[n];

        low = new int[n];

        Arrays.fill(disc, -1);

        for (int i = 0; i < n; i++) {

            adj.add(new ArrayList<>());
        }
    }

    public void addEdge(
        int u,
        int v,
        int edgeId
    ) {

        adj.get(u).add(new Edge(v, edgeId));

        adj.get(v).add(new Edge(u, edgeId));
    }

    private void dfs(
        int u,
        int parentEdgeId
    ) {

        disc[u] = timer;

        low[u] = timer;

        timer++;

        for (Edge edge : adj.get(u)) {

            int v = edge.to;

            // Skip the exact edge used to enter this vertex
            if (edge.id == parentEdgeId) {
                continue;
            }

            if (disc[v] == -1) {

                dfs(v, edge.id);

                low[u] = Math.min(
                    low[u],
                    low[v]
                );

                // Bridge condition
                if (low[v] > disc[u]) {

                    bridges.add(
                        new int[]{u, v}
                    );
                }

            } else {

                low[u] = Math.min(
                    low[u],
                    disc[v]
                );
            }
        }
    }

    public List<int[]> findBridges() {

        for (int i = 0; i < disc.length; i++) {

            if (disc[i] == -1) {

                dfs(i, -1);
            }
        }

        return bridges;
    }

    public static void main(String[] args) {

        BridgeFinder graph =
            new BridgeFinder(5);

        graph.addEdge(0, 1, 0);

        graph.addEdge(1, 2, 1);

        graph.addEdge(2, 3, 2);

        graph.addEdge(3, 1, 3);

        graph.addEdge(3, 4, 4);

        List<int[]> bridges =
            graph.findBridges();

        for (int[] edge : bridges) {

            System.out.println(
                edge[0] + " — " + edge[1]
            );
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-18-222" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-18-228" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3 — 4
1 — 0`}</code>
          </pre>
        </div>
        <p key="p-18-229" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These are the two bridges in this example.
        </p>
        <h3 key="h3-18-231" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.5 Complexity
        </h3>
        <p key="p-18-233" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For adjacency lists:
        </p>
        <div key="eq-18-236" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-18-237" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Every vertex and edge is processed a constant number of times.
        </p>
        <p key="p-18-239" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Additional space:
        </p>
        <div key="eq-18-242" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-18-243" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          including the graph representation, arrays, and recursion stack.
        </p>
      </div>
    )
  },
  {
    id: 19,
    title: "19. Articulation Points (Cut Vertices)",
    category: "Critical Connections",
    content: (
      <div className="space-y-4">
        <p key="p-19-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An articulation point is a vertex whose removal increases the number of connected components in an undirected graph.
        </p>
        <p key="p-19-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It is also called a cut vertex.
        </p>
        <h3 key="h3-19-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.1 Understanding Articulation Points
        </h3>
        <p key="p-19-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-19-15" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 — 1 — 2
    |
    3 — 4`}</code>
          </pre>
        </div>
        <p key="p-19-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If we remove vertex 1:
        </p>
        <ul key="ul-19-21" className="my-3 space-y-1.5 pl-2">
          <li key="li-19-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Vertex 0 becomes isolated.</span>
          </li>
          <li key="li-19-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Vertex 2 becomes separated.</span>
          </li>
          <li key="li-19-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Vertices 3 and 4 form another part.</span>
          </li>
        </ul>
        <p key="p-19-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, vertex 1 is an articulation point.
        </p>
        <p key="p-19-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Removing vertex 2, for example, may not increase the number of connected components if it is simply a leaf.
        </p>
        <p key="p-19-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The actual result depends on the full graph structure.
        </p>
        <h3 key="h3-19-28" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.2 Articulation Point Conditions
        </h3>
        <p key="p-19-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We use the same discovery-time and low-link arrays.
        </p>
        <p key="p-19-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are two important cases.
        </p>
        <h4 key="h4-19-34" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Case 1: Non-Root Vertex
        </h4>
        <p key="p-19-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose u is a vertex in the DFS tree, and v is one of its DFS children.
        </p>
        <p key="p-19-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The condition is:
        </p>
        <div key="eq-19-41" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"\\boxed{low[v] \\geq disc[u]} \\"}
        </div>
        <p key="p-19-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If this condition holds, the subtree rooted at v cannot reach an ancestor of u without passing through u.
        </p>
        <p key="p-19-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, removing u disconnects that subtree.
        </p>
        <p key="p-19-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          So u is an articulation point.
        </p>
        <h4 key="h4-19-48" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Case 2: DFS Root
        </h4>
        <p key="p-19-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The root is handled differently.
        </p>
        <p key="p-19-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The root is an articulation point if it has more than one DFS child.
        </p>
        <div key="eq-19-55" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"\\boxed{childCount > 1} \\"}
        </div>
        <p key="p-19-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-19-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Because different DFS subtrees of the root do not have a path connecting them without passing through the root. If there is more than one such subtree, removing the root separates them.
        </p>
        <h3 key="h3-19-60" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.3 Java Implementation
        </h3>
        <div key="code-19-222" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class ArticulationPoints {

    static class Edge {

        int to;
        int id;

        Edge(int to, int id) {

            this.to = to;
            this.id = id;
        }
    }

    private List<List<Edge>> adj;

    private int[] disc;
    private int[] low;

    private boolean[] isArticulation;

    private int timer = 0;

    public ArticulationPoints(int n) {

        adj = new ArrayList<>();

        disc = new int[n];

        low = new int[n];

        isArticulation = new boolean[n];

        Arrays.fill(disc, -1);

        for (int i = 0; i < n; i++) {

            adj.add(new ArrayList<>());
        }
    }

    public void addEdge(
        int u,
        int v,
        int edgeId
    ) {

        adj.get(u).add(new Edge(v, edgeId));

        adj.get(v).add(new Edge(u, edgeId));
    }

    private void dfs(
        int u,
        int parentEdgeId
    ) {

        disc[u] = timer;

        low[u] = timer;

        timer++;

        int children = 0;

        for (Edge edge : adj.get(u)) {

            int v = edge.to;

            if (edge.id == parentEdgeId) {
                continue;
            }

            if (disc[v] == -1) {

                children++;

                dfs(v, edge.id);

                low[u] = Math.min(
                    low[u],
                    low[v]
                );

                // Non-root articulation condition
                if (
                    parentEdgeId != -1
                    && low[v] >= disc[u]
                ) {

                    isArticulation[u] = true;
                }

            } else {

                low[u] = Math.min(
                    low[u],
                    disc[v]
                );
            }
        }

        // Root-specific condition
        if (
            parentEdgeId == -1
            && children > 1
        ) {

            isArticulation[u] = true;
        }
    }

    public List<Integer> findArticulationPoints() {

        for (int i = 0; i < disc.length; i++) {

            if (disc[i] == -1) {

                dfs(i, -1);
            }
        }

        List<Integer> result =
            new ArrayList<>();

        for (int i = 0; i < isArticulation.length; i++) {

            if (isArticulation[i]) {

                result.add(i);
            }
        }

        return result;
    }

    public static void main(String[] args) {

        ArticulationPoints graph =
            new ArticulationPoints(5);

        graph.addEdge(0, 1, 0);

        graph.addEdge(1, 2, 1);

        graph.addEdge(2, 3, 2);

        graph.addEdge(3, 1, 3);

        graph.addEdge(3, 4, 4);

        System.out.println(
            graph.findArticulationPoints()
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-19-223" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-19-228" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 3]`}</code>
          </pre>
        </div>
        <p key="p-19-229" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These vertices are the articulation points.
        </p>
        <h3 key="h3-19-231" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.4 Bridges vs Articulation Points
        </h3>
        <div key="table-19-240" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-19-0" className="p-3 font-semibold">Feature</th>
                <th key="th-19-1" className="p-3 font-semibold">Bridge</th>
                <th key="th-19-2" className="p-3 font-semibold">Articulation point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-19-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-19-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Represents</td>
                <td key="td-19-0-1" className="p-3 text-stone-700 ">Critical edge</td>
                <td key="td-19-0-2" className="p-3 text-stone-700 ">Critical vertex</td>
              </tr>
              <tr key="tr-19-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-19-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Removal</td>
                <td key="td-19-1-1" className="p-3 text-stone-700 ">Remove an edge</td>
                <td key="td-19-1-2" className="p-3 text-stone-700 ">Remove a vertex</td>
              </tr>
              <tr key="tr-19-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-19-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Effect</td>
                <td key="td-19-2-1" className="p-3 text-stone-700 ">Increases component count</td>
                <td key="td-19-2-2" className="p-3 text-stone-700 ">Increases component count</td>
              </tr>
              <tr key="tr-19-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-19-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Main condition</td>
                <td key="td-19-3-1" className="p-3 text-stone-700 ">low[v] &gt; disc[u]</td>
                <td key="td-19-3-2" className="p-3 text-stone-700 ">low[v] &gt;= disc[u]</td>
              </tr>
              <tr key="tr-19-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-19-4-0" className="p-3 text-stone-700 font-mono text-stone-800">DFS root special case</td>
                <td key="td-19-4-1" className="p-3 text-stone-700 ">No</td>
                <td key="td-19-4-2" className="p-3 text-stone-700 ">Yes, more than one DFS child</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-19-241" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The difference between <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">&gt;</code> and <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">&gt;=</code> is extremely important.
        </p>
        <p key="p-19-243" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a bridge:
        </p>
        <div key="eq-19-246" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"low[v] > disc[u] \\"}
        </div>
        <p key="p-19-247" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a non-root articulation point:
        </p>
        <div key="eq-19-250" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"low[v] \\geq disc[u] \\"}
        </div>
        <p key="p-19-251" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">low[v] == disc[u]</code>, the child subtree can reach u itself, so the connecting edge is not a bridge. However, it still cannot bypass u to reach an ancestor, so u can be an articulation point.
        </p>
      </div>
    )
  },
  {
    id: 20,
    title: "20. Graph Traversal Complexity Analysis",
    category: "Complexity Analysis",
    content: (
      <div className="space-y-4">
        <p key="p-20-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understanding graph algorithm complexity is essential for coding interviews.
        </p>
        <p key="p-20-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The main factors are:
        </p>
        <ul key="ul-20-8" className="my-3 space-y-1.5 pl-2">
          <li key="li-20-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>V = Number of vertices.</span>
          </li>
          <li key="li-20-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>E = Number of edges.</span>
          </li>
        </ul>
        <p key="p-20-9" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an adjacency list, most fundamental graph algorithms take:
        </p>
        <div key="eq-20-12" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <p key="p-20-13" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Let&apos;s understand why.
        </p>
        <h3 key="h3-20-15" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.1 Why O(V + E)?
        </h3>
        <p key="p-20-17" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When performing BFS or DFS:
        </p>
        <ul key="ul-20-21" className="my-3 space-y-1.5 pl-2">
          <li key="li-20-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Every vertex is visited at most once.</span>
          </li>
          <li key="li-20-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Every edge is examined a constant number of times.</span>
          </li>
        </ul>
        <p key="p-20-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an undirected graph, each edge normally appears twice in the adjacency lists, once for each endpoint.
        </p>
        <p key="p-20-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, the total traversal cost is proportional to:
        </p>
        <div key="eq-20-27" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"V+2E \\"}
        </div>
        <p key="p-20-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Ignoring constants:
        </p>
        <div key="eq-20-31" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"O(V+E) \\"}
        </div>
        <h3 key="h3-20-32" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.2 Complete Complexity Table
        </h3>
        <div key="table-20-48" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-20-0" className="p-3 font-semibold">Algorithm</th>
                <th key="th-20-1" className="p-3 font-semibold">Time complexity</th>
                <th key="th-20-2" className="p-3 font-semibold">Auxiliary space</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-20-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-0-0" className="p-3 text-stone-700 font-mono text-stone-800">BFS</td>
                <td key="td-20-0-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-0-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-1-0" className="p-3 text-stone-700 font-mono text-stone-800">DFS</td>
                <td key="td-20-1-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-1-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Connected components</td>
                <td key="td-20-2-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-2-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Undirected cycle detection</td>
                <td key="td-20-3-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-3-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Directed cycle detection</td>
                <td key="td-20-4-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-4-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-5" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-5-0" className="p-3 text-stone-700 font-mono text-stone-800">Bipartite checking</td>
                <td key="td-20-5-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-5-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-6" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-6-0" className="p-3 text-stone-700 font-mono text-stone-800">Topological sorting</td>
                <td key="td-20-6-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-6-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-7" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-7-0" className="p-3 text-stone-700 font-mono text-stone-800">Kahn&apos;s algorithm</td>
                <td key="td-20-7-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-7-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-8" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-8-0" className="p-3 text-stone-700 font-mono text-stone-800">Kosaraju&apos;s algorithm</td>
                <td key="td-20-8-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-8-2" className="p-3 text-stone-700 ">O(V + E)</td>
              </tr>
              <tr key="tr-20-9" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-9-0" className="p-3 text-stone-700 font-mono text-stone-800">Tarjan&apos;s SCC algorithm</td>
                <td key="td-20-9-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-9-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-10" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-10-0" className="p-3 text-stone-700 font-mono text-stone-800">Bridge detection</td>
                <td key="td-20-10-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-10-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
              <tr key="tr-20-11" className="hover:bg-stone-50 transition-colors">
                <td key="td-20-11-0" className="p-3 text-stone-700 font-mono text-stone-800">Articulation points</td>
                <td key="td-20-11-1" className="p-3 text-stone-700 ">O(V + E)</td>
                <td key="td-20-11-2" className="p-3 text-stone-700 ">O(V)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-20-49" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These auxiliary-space estimates exclude the input graph and, where applicable, the result being returned. Recursion can also require O(V) call-stack space.
        </p>
        <h3 key="h3-20-51" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.3 How Graph Density Affects Performance
        </h3>
        <p key="p-20-53" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A graph can be sparse or dense.
        </p>
        <p key="p-20-55" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Sparse graph:</strong> Contains relatively few edges compared with the maximum possible number.
        </p>
        <p key="p-20-57" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Dense graph:</strong> Contains many edges, approaching the maximum possible number.
        </p>
        <p key="p-20-59" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a simple undirected graph:
        </p>
        <div key="eq-20-62" className="my-3 p-3 rounded-lg bg-stone-900 border border-stone-800 font-mono text-xs text-orange-300 text-center overflow-x-auto">
          {"E\\_{\\max}=\\frac{V(V-1)}{2} \\"}
        </div>
        <p key="p-20-63" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For sparse graphs, adjacency lists are generally preferable.
        </p>
        <p key="p-20-65" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For dense graphs, adjacency matrices can be practical, especially when checking edges frequently.
        </p>
      </div>
    )
  },
  {
    id: 21,
    title: "21. Important Graph Concepts — Quick Revision",
    category: "Summary & Review",
    content: (
      <div className="space-y-4">
        <p key="p-21-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Here is a consolidated revision of the major techniques covered in this module.
        </p>
        <div key="table-21-20" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-21-0" className="p-3 font-semibold">Concept</th>
                <th key="th-21-1" className="p-3 font-semibold">Main idea</th>
                <th key="th-21-2" className="p-3 font-semibold">Important data structure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-21-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Graph representation</td>
                <td key="td-21-0-1" className="p-3 text-stone-700 ">Store vertices and edges</td>
                <td key="td-21-0-2" className="p-3 text-stone-700 ">Lists / Arrays</td>
              </tr>
              <tr key="tr-21-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-1-0" className="p-3 text-stone-700 font-mono text-stone-800">BFS</td>
                <td key="td-21-1-1" className="p-3 text-stone-700 ">Explore level by level</td>
                <td key="td-21-1-2" className="p-3 text-stone-700 ">Queue</td>
              </tr>
              <tr key="tr-21-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-2-0" className="p-3 text-stone-700 font-mono text-stone-800">DFS</td>
                <td key="td-21-2-1" className="p-3 text-stone-700 ">Explore deeply and backtrack</td>
                <td key="td-21-2-2" className="p-3 text-stone-700 ">Stack / Recursion</td>
              </tr>
              <tr key="tr-21-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Connected components</td>
                <td key="td-21-3-1" className="p-3 text-stone-700 ">Find separate reachable groups</td>
                <td key="td-21-3-2" className="p-3 text-stone-700 ">BFS / DFS</td>
              </tr>
              <tr key="tr-21-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Undirected cycle detection</td>
                <td key="td-21-4-1" className="p-3 text-stone-700 ">Visited neighbor other than parent</td>
                <td key="td-21-4-2" className="p-3 text-stone-700 ">DFS</td>
              </tr>
              <tr key="tr-21-5" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-5-0" className="p-3 text-stone-700 font-mono text-stone-800">Directed cycle detection</td>
                <td key="td-21-5-1" className="p-3 text-stone-700 ">Detect a back edge to active DFS vertex</td>
                <td key="td-21-5-2" className="p-3 text-stone-700 ">Three-state DFS</td>
              </tr>
              <tr key="tr-21-6" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-6-0" className="p-3 text-stone-700 font-mono text-stone-800">Bipartite graph</td>
                <td key="td-21-6-1" className="p-3 text-stone-700 ">Two-coloring</td>
                <td key="td-21-6-2" className="p-3 text-stone-700 ">BFS / DFS</td>
              </tr>
              <tr key="tr-21-7" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-7-0" className="p-3 text-stone-700 font-mono text-stone-800">Topological sorting</td>
                <td key="td-21-7-1" className="p-3 text-stone-700 ">Order dependencies</td>
                <td key="td-21-7-2" className="p-3 text-stone-700 ">DFS / Queue</td>
              </tr>
              <tr key="tr-21-8" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-8-0" className="p-3 text-stone-700 font-mono text-stone-800">Kahn&apos;s algorithm</td>
                <td key="td-21-8-1" className="p-3 text-stone-700 ">Process zero-in-degree vertices</td>
                <td key="td-21-8-2" className="p-3 text-stone-700 ">Queue</td>
              </tr>
              <tr key="tr-21-9" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-9-0" className="p-3 text-stone-700 font-mono text-stone-800">SCC</td>
                <td key="td-21-9-1" className="p-3 text-stone-700 ">Find mutually reachable groups</td>
                <td key="td-21-9-2" className="p-3 text-stone-700 ">DFS</td>
              </tr>
              <tr key="tr-21-10" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-10-0" className="p-3 text-stone-700 font-mono text-stone-800">Kosaraju</td>
                <td key="td-21-10-1" className="p-3 text-stone-700 ">Two DFS passes and transpose</td>
                <td key="td-21-10-2" className="p-3 text-stone-700 ">Stack / DFS</td>
              </tr>
              <tr key="tr-21-11" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-11-0" className="p-3 text-stone-700 font-mono text-stone-800">Tarjan SCC</td>
                <td key="td-21-11-1" className="p-3 text-stone-700 ">Discovery times and low-link values</td>
                <td key="td-21-11-2" className="p-3 text-stone-700 ">Stack / DFS</td>
              </tr>
              <tr key="tr-21-12" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-12-0" className="p-3 text-stone-700 font-mono text-stone-800">Bridges</td>
                <td key="td-21-12-1" className="p-3 text-stone-700 ">Find critical edges</td>
                <td key="td-21-12-2" className="p-3 text-stone-700 ">DFS + Low-link</td>
              </tr>
              <tr key="tr-21-13" className="hover:bg-stone-50 transition-colors">
                <td key="td-21-13-0" className="p-3 text-stone-700 font-mono text-stone-800">Articulation points</td>
                <td key="td-21-13-1" className="p-3 text-stone-700 ">Find critical vertices</td>
                <td key="td-21-13-2" className="p-3 text-stone-700 ">DFS + Low-link</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 22,
    title: "22. Common Graph Interview Mistakes & Anti-Patterns",
    category: "Defensive Engineering",
    content: (
      <div className="space-y-4">
        <p key="p-22-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Graph problems are often difficult not because of complicated mathematics, but because of small implementation mistakes.
        </p>
        <h4 key="h4-22-4" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 1: Forgetting Disconnected Components
        </h4>
        <p key="p-22-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Running BFS or DFS from only vertex 0 does not guarantee that every vertex will be visited.
        </p>
        <p key="p-22-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use an outer loop over all vertices when the algorithm must process the complete graph.
        </p>
        <h4 key="h4-22-10" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 2: Incorrectly Adding Undirected Edges
        </h4>
        <p key="p-22-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an undirected graph, remember:
        </p>
        <div key="code-22-18" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`adj.get(u).add(v);
adj.get(v).add(u);`}</code>
          </pre>
        </div>
        <p key="p-22-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a directed graph, add only the forward edge.
        </p>
        <h4 key="h4-22-21" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 3: Marking BFS Vertices Too Late
        </h4>
        <p key="p-22-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Mark vertices as visited when they are inserted into the queue.
        </p>
        <p key="p-22-25" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Otherwise, multiple neighboring vertices may insert the same vertex repeatedly.
        </p>
        <h4 key="h4-22-27" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 4: Using BFS for Weighted Shortest Paths
        </h4>
        <p key="p-22-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS finds minimum-edge-count paths in unweighted graphs.
        </p>
        <p key="p-22-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For general nonnegative weighted shortest paths, Dijkstra&apos;s algorithm is usually appropriate.
        </p>
        <h4 key="h4-22-33" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 5: Confusing Directed and Undirected Cycle Detection
        </h4>
        <p key="p-22-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Undirected graphs use parent tracking.
        </p>
        <p key="p-22-37" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Directed graphs need to detect a back edge into the current DFS recursion path.
        </p>
        <p key="p-22-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A simple visited array cannot distinguish these situations correctly.
        </p>
        <h4 key="h4-22-41" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 6: Applying Topological Sorting to Cyclic Graphs
        </h4>
        <p key="p-22-43" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Topological ordering exists only for directed acyclic graphs.
        </p>
        <p key="p-22-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In Kahn&apos;s algorithm, verify:
        </p>
        <div key="code-22-50" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 17 Graph Theory</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`order.size() == vertices`}</code>
          </pre>
        </div>
        <p key="p-22-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Otherwise, the graph contains a cycle.
        </p>
        <h4 key="h4-22-53" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 7: Confusing Connected Components with SCCs
        </h4>
        <p key="p-22-55" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A directed graph can have different weakly connected and strongly connected components.
        </p>
        <p key="p-22-57" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Do not ignore edge directions when finding SCCs.
        </p>
        <h4 key="h4-22-59" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 8: Mixing Tarjan&apos;s Low-Link Conditions
        </h4>
        <p key="p-22-61" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Memorize these conditions carefully:
        </p>
        <div key="table-22-69" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-22-0" className="p-3 font-semibold">Problem</th>
                <th key="th-22-1" className="p-3 font-semibold">Condition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-22-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-22-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Tarjan SCC root</td>
                <td key="td-22-0-1" className="p-3 text-stone-700 "><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">low[u] == discovery[u]</code></td>
              </tr>
              <tr key="tr-22-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-22-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Bridge</td>
                <td key="td-22-1-1" className="p-3 text-stone-700 "><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">low[v] &gt; discovery[u]</code></td>
              </tr>
              <tr key="tr-22-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-22-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Non-root articulation point</td>
                <td key="td-22-2-1" className="p-3 text-stone-700 "><code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">low[v] &gt;= discovery[u]</code></td>
              </tr>
              <tr key="tr-22-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-22-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Root articulation point</td>
                <td key="td-22-3-1" className="p-3 text-stone-700 ">More than one DFS child</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-22-70" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Although these algorithms share low-link concepts, their conditions serve different purposes.
        </p>
        <h4 key="h4-22-72" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 9: Ignoring Recursion Depth
        </h4>
        <p key="p-22-74" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          DFS, Kosaraju, Tarjan, bridge detection, and articulation-point detection can recurse deeply.
        </p>
        <p key="p-22-76" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For very large graphs, Java may throw <code className="font-mono text-orange-700 text-xs px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200">StackOverflowError</code>.
        </p>
        <p key="p-22-78" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An iterative DFS or an iterative implementation of the required algorithm may be necessary when graph depth is large.
        </p>
        <h4 key="h4-22-80" className="text-base font-semibold text-stone-900 mt-6 mb-2 flex items-center gap-2">
          <span className="text-orange-500 font-mono">▸</span>
          Mistake 10: Assuming Every Graph Is Simple
        </h4>
        <p key="p-22-82" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Graphs may contain:
        </p>
        <ul key="ul-22-87" className="my-3 space-y-1.5 pl-2">
          <li key="li-22-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Self-loops.</span>
          </li>
          <li key="li-22-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Parallel edges.</span>
          </li>
          <li key="li-22-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Disconnected components.</span>
          </li>
        </ul>
        <p key="p-22-88" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For bridge and undirected cycle detection, tracking edge IDs instead of only parent vertices is important when parallel edges are possible.
        </p>
      </div>
    )
  },
  {
    id: 23,
    title: "23. How to Recognize Graph Problems in Interviews",
    category: "Interview Patterns",
    content: (
      <div className="space-y-4">
        <p key="p-23-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When a problem contains certain descriptions, you should immediately consider graph algorithms.
        </p>
        <div key="table-23-17" className="my-5 overflow-x-auto rounded-xl border border-[#e7e3da] shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono">
                <th key="th-23-0" className="p-3 font-semibold">Problem statement clue</th>
                <th key="th-23-1" className="p-3 font-semibold">Possible graph algorithm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white font-sans">
              <tr key="tr-23-0" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-0-0" className="p-3 text-stone-700 font-mono text-stone-800">Find the minimum number of steps between nodes</td>
                <td key="td-23-0-1" className="p-3 text-stone-700 ">BFS</td>
              </tr>
              <tr key="tr-23-1" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-1-0" className="p-3 text-stone-700 font-mono text-stone-800">Explore every reachable vertex</td>
                <td key="td-23-1-1" className="p-3 text-stone-700 ">DFS / BFS</td>
              </tr>
              <tr key="tr-23-2" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-2-0" className="p-3 text-stone-700 font-mono text-stone-800">Find separate groups in a network</td>
                <td key="td-23-2-1" className="p-3 text-stone-700 ">Connected components</td>
              </tr>
              <tr key="tr-23-3" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-3-0" className="p-3 text-stone-700 font-mono text-stone-800">Detect a circular dependency</td>
                <td key="td-23-3-1" className="p-3 text-stone-700 ">Directed cycle detection</td>
              </tr>
              <tr key="tr-23-4" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-4-0" className="p-3 text-stone-700 font-mono text-stone-800">Detect an undirected network cycle</td>
                <td key="td-23-4-1" className="p-3 text-stone-700 ">DFS / DSU</td>
              </tr>
              <tr key="tr-23-5" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-5-0" className="p-3 text-stone-700 font-mono text-stone-800">Divide vertices into two groups</td>
                <td key="td-23-5-1" className="p-3 text-stone-700 ">Bipartite checking</td>
              </tr>
              <tr key="tr-23-6" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-6-0" className="p-3 text-stone-700 font-mono text-stone-800">Order tasks based on prerequisites</td>
                <td key="td-23-6-1" className="p-3 text-stone-700 ">Topological sorting</td>
              </tr>
              <tr key="tr-23-7" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-7-0" className="p-3 text-stone-700 font-mono text-stone-800">Find mutually reachable groups</td>
                <td key="td-23-7-1" className="p-3 text-stone-700 ">SCC</td>
              </tr>
              <tr key="tr-23-8" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-8-0" className="p-3 text-stone-700 font-mono text-stone-800">Find critical network connections</td>
                <td key="td-23-8-1" className="p-3 text-stone-700 ">Bridges</td>
              </tr>
              <tr key="tr-23-9" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-9-0" className="p-3 text-stone-700 font-mono text-stone-800">Find critical network nodes</td>
                <td key="td-23-9-1" className="p-3 text-stone-700 ">Articulation points</td>
              </tr>
              <tr key="tr-23-10" className="hover:bg-stone-50 transition-colors">
                <td key="td-23-10-0" className="p-3 text-stone-700 font-mono text-stone-800">Find vertices with no remaining prerequisites</td>
                <td key="td-23-10-1" className="p-3 text-stone-700 ">Kahn&apos;s algorithm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-23-18" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          A Practical Interview Approach
        </h3>
        <p key="p-23-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Whenever you encounter a graph problem, follow this process:
        </p>
        <p key="p-23-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Step 1 — Identify the vertices.</strong>
        </p>
        <p key="p-23-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Ask yourself: What does each node represent?
        </p>
        <p key="p-23-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Step 2 — Identify the edges.</strong>
        </p>
        <p key="p-23-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          What relationship connects two nodes?
        </p>
        <p key="p-23-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Step 3 — Determine the graph type.</strong>
        </p>
        <p key="p-23-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Is it:
        </p>
        <ul key="ul-23-38" className="my-3 space-y-1.5 pl-2">
          <li key="li-23-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Directed or undirected?</span>
          </li>
          <li key="li-23-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Weighted or unweighted?</span>
          </li>
          <li key="li-23-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Connected or disconnected?</span>
          </li>
          <li key="li-23-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Cyclic or acyclic?</span>
          </li>
        </ul>
        <p key="p-23-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Step 4 — Choose the representation.</strong>
        </p>
        <p key="p-23-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For most of these problems, use an adjacency list.
        </p>
        <p key="p-23-43" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Step 5 — Select an algorithm.</strong>
        </p>
        <p key="p-23-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Decide whether you need BFS, DFS, topological sorting, SCC, or low-link analysis.
        </p>
        <p key="p-23-47" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Step 6 — Analyze complexity.</strong>
        </p>
        <p key="p-23-49" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For adjacency-list traversal, target O(V + E) whenever possible.
        </p>
        <p key="p-23-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Step 7 — Test edge cases.</strong>
        </p>
        <p key="p-23-53" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Check:
        </p>
        <ul key="ul-23-63" className="my-3 space-y-1.5 pl-2">
          <li key="li-23-0" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Empty graph.</span>
          </li>
          <li key="li-23-1" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>One vertex.</span>
          </li>
          <li key="li-23-2" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Disconnected graph.</span>
          </li>
          <li key="li-23-3" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Self-loop.</span>
          </li>
          <li key="li-23-4" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Multiple edges.</span>
          </li>
          <li key="li-23-5" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Directed cycle.</span>
          </li>
          <li key="li-23-6" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>No cycle.</span>
          </li>
          <li key="li-23-7" className="flex items-start gap-2 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
            <span>Multiple components.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 24,
    title: "24. Interview and Practice Problems (Levels 1–5)",
    category: "Practice Roadmap",
    content: (
      <div className="space-y-4">
        <p key="p-24-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The best way to master graph theory is to solve problems after understanding the underlying algorithm.
        </p>
        <p key="p-24-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These problems are arranged from fundamental to advanced.
        </p>
        <h3 key="h3-24-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 1 — Graph Fundamentals
        </h3>
        <ol key="ol-24-18" className="my-3 space-y-2 pl-2">
          <li key="oli-24-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Implement Graph Using Adjacency List.</span>
          </li>
          <li key="oli-24-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Implement Graph Using Adjacency Matrix.</span>
          </li>
          <li key="oli-24-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>BFS Traversal.</span>
          </li>
          <li key="oli-24-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>DFS Traversal.</span>
          </li>
          <li key="oli-24-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>Number of Provinces.</span>
          </li>
          <li key="oli-24-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Number of Connected Components.</span>
          </li>
          <li key="oli-24-6" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              7
            </span>
            <span>Find if Path Exists in Graph.</span>
          </li>
          <li key="oli-24-7" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              8
            </span>
            <span>Flood Fill.</span>
          </li>
          <li key="oli-24-8" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              9
            </span>
            <span>Number of Islands.</span>
          </li>
          <li key="oli-24-9" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              10
            </span>
            <span>Max Area of Island.</span>
          </li>
        </ol>
        <h3 key="h3-24-19" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 2 — Graph Traversal and Properties
        </h3>
        <ol key="ol-24-31" className="my-3 space-y-2 pl-2">
          <li key="oli-24-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Detect Cycle in an Undirected Graph.</span>
          </li>
          <li key="oli-24-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Detect Cycle in a Directed Graph.</span>
          </li>
          <li key="oli-24-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Find Eventual Safe States.</span>
          </li>
          <li key="oli-24-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Is Graph Bipartite?</span>
          </li>
          <li key="oli-24-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>Possible Bipartition.</span>
          </li>
          <li key="oli-24-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Shortest Path in an Unweighted Graph.</span>
          </li>
          <li key="oli-24-6" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              7
            </span>
            <span>Rotting Oranges.</span>
          </li>
          <li key="oli-24-7" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              8
            </span>
            <span>Shortest Path in a Binary Matrix.</span>
          </li>
          <li key="oli-24-8" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              9
            </span>
            <span>Word Ladder.</span>
          </li>
          <li key="oli-24-9" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              10
            </span>
            <span>Minimum Genetic Mutation.</span>
          </li>
        </ol>
        <h3 key="h3-24-32" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 3 — Topological Sorting
        </h3>
        <ol key="ol-24-42" className="my-3 space-y-2 pl-2">
          <li key="oli-24-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Topological Sort.</span>
          </li>
          <li key="oli-24-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Course Schedule.</span>
          </li>
          <li key="oli-24-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Course Schedule II.</span>
          </li>
          <li key="oli-24-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Find a Valid Course Ordering.</span>
          </li>
          <li key="oli-24-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>Alien Dictionary.</span>
          </li>
          <li key="oli-24-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Eventual Safe States.</span>
          </li>
          <li key="oli-24-6" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              7
            </span>
            <span>Parallel Courses.</span>
          </li>
          <li key="oli-24-7" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              8
            </span>
            <span>Minimum Semesters to Complete All Courses.</span>
          </li>
        </ol>
        <h3 key="h3-24-43" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 4 — Strongly Connected Components
        </h3>
        <ol key="ol-24-51" className="my-3 space-y-2 pl-2">
          <li key="oli-24-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Strongly Connected Components.</span>
          </li>
          <li key="oli-24-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Kosaraju&apos;s Algorithm.</span>
          </li>
          <li key="oli-24-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Tarjan&apos;s SCC Algorithm.</span>
          </li>
          <li key="oli-24-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Number of Strongly Connected Components.</span>
          </li>
          <li key="oli-24-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>2-SAT Introduction.</span>
          </li>
          <li key="oli-24-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Critical Connections in a Network.</span>
          </li>
        </ol>
        <h3 key="h3-24-52" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 5 — Advanced Graph Problems
        </h3>
        <ol key="ol-24-64" className="my-3 space-y-2 pl-2">
          <li key="oli-24-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>Critical Connections in a Network.</span>
          </li>
          <li key="oli-24-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Articulation Points.</span>
          </li>
          <li key="oli-24-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>Bridges in Graphs.</span>
          </li>
          <li key="oli-24-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>Minimum Number of Edges to Make a Graph Connected.</span>
          </li>
          <li key="oli-24-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>Clone Graph.</span>
          </li>
          <li key="oli-24-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Reconstruct Itinerary.</span>
          </li>
          <li key="oli-24-6" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              7
            </span>
            <span>Evaluate Division.</span>
          </li>
          <li key="oli-24-7" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              8
            </span>
            <span>Minimum Height Trees.</span>
          </li>
          <li key="oli-24-8" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              9
            </span>
            <span>Redundant Connection.</span>
          </li>
          <li key="oli-24-9" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              10
            </span>
            <span>Largest Component Size by Common Factor.</span>
          </li>
        </ol>
        <p key="p-24-65" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For the advanced exercises, you will need to combine graph theory with other concepts such as union-find, heaps, shortest paths, and dynamic programming.
        </p>
      </div>
    )
  },
  {
    id: 25,
    title: "25. Module 17 — Final Understanding Checklist",
    category: "Mastery Review",
    content: (
      <div className="space-y-4">
        <p key="p-25-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use this checklist to track your learning.
        </p>
        <p key="p-25-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Graph Theory mastery tracker</strong>
        </p>
        <p key="p-25-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          0 / 25 completed
        </p>
        <h3 key="h3-25-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          0%
        </h3>
        <p key="p-25-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand graph fundamentals and terminology
        </p>
        <p key="p-25-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand directed and undirected graphs
        </p>
        <p key="p-25-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand weighted and unweighted graphs
        </p>
        <p key="p-25-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand vertices, edges, degree and paths
        </p>
        <p key="p-25-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement adjacency matrix
        </p>
        <p key="p-25-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement adjacency list
        </p>
        <p key="p-25-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement edge list
        </p>
        <p key="p-25-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Build reusable Java graph classes
        </p>
        <p key="p-25-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement BFS traversal
        </p>
        <p key="p-25-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Find shortest paths using BFS in unweighted graphs
        </p>
        <p key="p-25-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement recursive DFS
        </p>
        <p key="p-25-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement iterative DFS
        </p>
        <p key="p-25-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Find connected components
        </p>
        <p key="p-25-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Detect cycles in undirected graphs
        </p>
        <p key="p-25-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Detect cycles in directed graphs
        </p>
        <p key="p-25-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Check whether a graph is bipartite
        </p>
        <p key="p-25-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand DAGs and topological ordering
        </p>
        <p key="p-25-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Kahn&apos;s algorithm
        </p>
        <p key="p-25-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand strongly connected components
        </p>
        <p key="p-25-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Kosaraju&apos;s algorithm
        </p>
        <p key="p-25-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Tarjan&apos;s SCC algorithm
        </p>
        <p key="p-25-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand discovery time and low-link values
        </p>
        <p key="p-25-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Find bridges in an undirected graph
        </p>
        <p key="p-25-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Find articulation points
        </p>
        <p key="p-25-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Analyze graph traversal complexity
        </p>
        <p key="p-25-60" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Reset progress
        </p>
        <h3 key="h3-25-62" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          The 10 Most Important Things to Remember
        </h3>
        <ol key="ol-25-74" className="my-3 space-y-2 pl-2">
          <li key="oli-25-0" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              1
            </span>
            <span>A graph consists of vertices and edges.</span>
          </li>
          <li key="oli-25-1" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              2
            </span>
            <span>Adjacency lists are generally the most useful representation for graph traversal.</span>
          </li>
          <li key="oli-25-2" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              3
            </span>
            <span>BFS uses a queue and explores level by level.</span>
          </li>
          <li key="oli-25-3" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              4
            </span>
            <span>DFS uses recursion or a stack and explores deeply.</span>
          </li>
          <li key="oli-25-4" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              5
            </span>
            <span>Connected components identify separate reachable groups.</span>
          </li>
          <li key="oli-25-5" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              6
            </span>
            <span>Directed and undirected cycle detection require different logic.</span>
          </li>
          <li key="oli-25-6" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              7
            </span>
            <span>Bipartite graphs can be checked through two-coloring.</span>
          </li>
          <li key="oli-25-7" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              8
            </span>
            <span>Kahn&apos;s algorithm uses in-degree to produce a topological ordering.</span>
          </li>
          <li key="oli-25-8" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              9
            </span>
            <span>Kosaraju and Tarjan find strongly connected components.</span>
          </li>
          <li key="oli-25-9" className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-[#ea580c] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
              10
            </span>
            <span>Discovery time and low-link values are fundamental to Tarjan&apos;s SCC, bridge, and articulation-point algorithms.</span>
          </li>
        </ol>
        <h3 key="h3-25-75" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          What You Should Be Able to Do After This Module
        </h3>
        <p key="p-25-77" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          By the end of Module 17, you should be able to take an unfamiliar graph problem, translate it into a graph representation, select the appropriate algorithm, implement it in Java, and explain its correctness and time complexity.
        </p>
        <p key="p-25-79" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          You should also understand the difference between ordinary DFS traversal and advanced DFS-based algorithms such as Kosaraju, Tarjan, bridge detection, and articulation-point detection.
        </p>
        <p key="p-25-81" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900 font-semibold">One important recommendation:</strong> Do not try to memorize all the advanced graph code at once. First become comfortable with adjacency lists, BFS, and DFS. Then understand cycle detection and topological sorting. Finally, study low-link values and Tarjan&apos;s algorithms. The advanced algorithms become much easier once the DFS foundation is clear.
        </p>
      </div>
    )
  },
];
