import React from "react";

export const JAVA_SHORTEST_PATHS_MST_SECTIONS = [
  {
    id: 0,
    title: "Module 18 Overview & Graph Foundations",
    summary: "Curriculum roadmap: Shortest Path algorithms, Minimum Spanning Trees, DSU optimization, and grid-based pathfinding.",
    content: (
      <div className="space-y-4">
        <p key="p-0-0" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Module 18 — Shortest Paths &amp; Minimum Spanning Trees</strong>
        </p>
        <p key="p-0-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Java + Data Structures and Algorithms | Advanced Graph Algorithms</strong>
        </p>
        <p key="p-0-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This module introduces some of the most important graph algorithms used in competitive programming, technical interviews, network engineering, transportation systems, and large-scale infrastructure.
        </p>
        <p key="p-0-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          You will learn how to calculate the shortest route between vertices, detect negative-weight cycles, find minimum-cost networks, optimize graph connectivity, and solve shortest-path problems in grids.
        </p>
        <p key="p-0-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The module covers four major areas:
        </p>
        <ol key="ol-0-14" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li><strong className="font-bold text-stone-900">Shortest Path Algorithms:</strong> BFS, Dijkstra, Bellman-Ford, Floyd-Warshall, and DAG shortest paths.</li>
          <li><strong className="font-bold text-stone-900">Minimum Spanning Trees:</strong> Prim's and Kruskal's algorithms.</li>
          <li><strong className="font-bold text-stone-900">Graph Optimization:</strong> Disjoint Set Union (DSU), network connectivity, and cycle detection.</li>
          <li><strong className="font-bold text-stone-900">Advanced Shortest Paths:</strong> Multi-source BFS, 0-1 BFS, and grid-based graph problems.</li>
      </ol>
        <p key="p-0-15" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 1 — Graph Foundations</strong>
        </p>
      </div>
    )
  },
  {
    id: 1,
    title: "1. Shortest Path Problem",
    summary: "Graph fundamentals, path costs, and variations (single-source, single-pair, all-pairs, DAGs).",
    content: (
      <div className="space-y-4">
        <h3 key="h3-1-0" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1. Shortest Path Problem
        </h3>
        <p key="p-1-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Before learning shortest-path algorithms, understand what a shortest path actually means.
        </p>
        <p key="p-1-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A graph consists of:
        </p>
        <ul key="ul-1-9" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li><strong className="font-bold text-stone-900">Vertices (V):</strong> The nodes or points in a graph.</li>
          <li><strong className="font-bold text-stone-900">Edges (E):</strong> Connections between vertices.</li>
          <li><strong className="font-bold text-stone-900">Weights:</strong> The cost associated with travelling through an edge, when the graph is weighted.</li>
      </ul>
        <p key="p-1-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider this weighted graph:
        </p>
        <h3 key="h3-1-12" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Example weighted graph
        </h3>
        <p key="p-1-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Illustrative weighted graph. Edge labels represent traversal costs.
        </p>
        <p key="p-1-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A path is a sequence of vertices connected through edges.
        </p>
        <p key="p-1-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <div key="code-1-23" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → C`}</code>
          </pre>
        </div>
        <p key="p-1-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If the edge weights are:
        </p>
        <div key="code-1-30" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B = 4
B → C = 3`}</code>
          </pre>
        </div>
        <p key="p-1-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The total path cost is:
        </p>
        <p key="p-1-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 4+3=7 </span>
        </p>
        <p key="p-1-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Another possible path might be:
        </p>
        <div key="code-1-40" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → D → C`}</code>
          </pre>
        </div>
        <p key="p-1-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If its costs are:
        </p>
        <div key="code-1-47" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → D = 7
D → C = 2`}</code>
          </pre>
        </div>
        <p key="p-1-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Its total cost is:
        </p>
        <p key="p-1-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 7+2=9 </span>
        </p>
        <p key="p-1-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, the shortest path from A to C is the path with total cost 7.
        </p>
        <h3 key="h3-1-54" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.1 Types of Shortest Path Problems
        </h3>
        <p key="p-1-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are several variations.
        </p>
        <div key="table-1-66" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Meaning</th>
                <th className="p-3 font-semibold">Typical algorithm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Single-source shortest path</td>
                  <td className="p-3">Shortest paths from one source to all vertices</td>
                  <td className="p-3">Dijkstra, Bellman-Ford</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Single-pair shortest path</td>
                  <td className="p-3">Shortest path between two specific vertices</td>
                  <td className="p-3">BFS, Dijkstra</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Single-destination shortest path</td>
                  <td className="p-3">Shortest paths from all vertices to one destination</td>
                  <td className="p-3">Reverse graph + single-source algorithm</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">All-pairs shortest paths</td>
                  <td className="p-3">Shortest paths between every pair</td>
                  <td className="p-3">Floyd-Warshall</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Unweighted shortest path</td>
                  <td className="p-3">Minimum number of edges</td>
                  <td className="p-3">BFS</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">DAG shortest path</td>
                  <td className="p-3">Shortest paths in a directed acyclic graph</td>
                  <td className="p-3">Topological ordering + relaxation</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-1-67" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.2 Unweighted vs Weighted Graphs
        </h3>
        <p key="p-1-69" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Unweighted graph</strong>
        </p>
        <p key="p-1-71" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Every edge has the same traversal cost, usually treated as 1.
        </p>
        <div key="code-1-78" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → C

A → D → C`}</code>
          </pre>
        </div>
        <p key="p-1-79" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The shortest path is the path with the fewest edges.
        </p>
        <p key="p-1-81" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS is appropriate because it explores vertices level by level.
        </p>
        <p key="p-1-83" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Weighted graph</strong>
        </p>
        <p key="p-1-85" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Edges have different costs.
        </p>
        <div key="code-1-92" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A --4-- B --3-- C

A --2-- D --1-- C`}</code>
          </pre>
        </div>
        <p key="p-1-93" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The path with the fewest edges is not necessarily the path with the lowest total weight.
        </p>
        <p key="p-1-95" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For weighted graphs, we need algorithms such as Dijkstra or Bellman-Ford.
        </p>
        <h3 key="h3-1-97" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.3 Directed vs Undirected Graphs
        </h3>
        <p key="p-1-99" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A directed graph has edges that point in a particular direction.
        </p>
        <div key="code-1-104" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B`}</code>
          </pre>
        </div>
        <p key="p-1-105" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This does not automatically mean that B can travel back to A.
        </p>
        <p key="p-1-107" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An undirected graph allows movement in both directions.
        </p>
        <div key="code-1-112" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A ↔ B`}</code>
          </pre>
        </div>
        <p key="p-1-113" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This distinction matters when implementing graph algorithms.
        </p>
        <p key="p-1-115" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example, an undirected edge between vertices 0 and 1 must be added twice in an adjacency-list representation:
        </p>
        <div key="code-1-121" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`graph.get(0).add(new Edge(1, 5));
graph.get(1).add(new Edge(0, 5));`}</code>
          </pre>
        </div>
        <p key="p-1-122" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A directed edge is added only once.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Java Graph Representation",
    summary: "Weighted Edge class, Adjacency List creation, directed vs undirected graph construction in Java.",
    content: (
      <div className="space-y-4">
        <p key="p-2-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Before implementing shortest-path algorithms, understand how weighted graphs are represented in Java.
        </p>
        <p key="p-2-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We will use an adjacency list because it is efficient for sparse graphs.
        </p>
        <h3 key="h3-2-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.1 Weighted Edge Class
        </h3>
        <div key="code-2-20" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`class Edge {

    int to;
    long weight;

    Edge(int to, long weight) {
        this.to = to;
        this.weight = weight;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-2-21" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Each edge stores:
        </p>
        <ul key="ul-2-25" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">to</code>: Destination vertex.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">weight</code>: Cost of travelling to that vertex.</li>
      </ul>
        <h3 key="h3-2-26" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.2 Creating an Adjacency List
        </h3>
        <div key="code-2-75" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class GraphModel {

    static class Edge {

        int to;
        long weight;

        Edge(int to, long weight) {
            this.to = to;
            this.weight = weight;
        }
    }

    public static List<List<Edge>> createGraph(int vertices) {

        List<List<Edge>> graph = new ArrayList<>();

        for (int i = 0; i < vertices; i++) {
            graph.add(new ArrayList<>());
        }

        return graph;
    }

    public static void addDirectedEdge(
            List<List<Edge>> graph,
            int from,
            int to,
            long weight) {

        graph.get(from).add(new Edge(to, weight));
    }

    public static void addUndirectedEdge(
            List<List<Edge>> graph,
            int u,
            int v,
            long weight) {

        graph.get(u).add(new Edge(v, weight));
        graph.get(v).add(new Edge(u, weight));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-2-76" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-2-86" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`List<List<Edge>> graph = createGraph(4);

addUndirectedEdge(graph, 0, 1, 5);
addUndirectedEdge(graph, 0, 2, 2);
addUndirectedEdge(graph, 1, 3, 3);
addUndirectedEdge(graph, 2, 3, 1);`}</code>
          </pre>
        </div>
        <p key="p-2-87" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The resulting adjacency list represents:
        </p>
        <div key="code-2-96" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 --5-- 1
|       |
2       3
|       |
2 --1-- 3`}</code>
          </pre>
        </div>
        <p key="p-2-97" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Complexity:</strong>
        </p>
        <ul key="ul-2-103" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Creating the graph: <span className="font-mono text-orange-300 font-semibold">O(V)</span>.</li>
          <li>Adding one directed edge: <span className="font-mono text-orange-300 font-semibold">O(1)</span> amortized.</li>
          <li>Adding one undirected edge: <span className="font-mono text-orange-300 font-semibold">O(1)</span> amortized.</li>
          <li>Storage: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>.</li>
      </ul>
        <p key="p-2-104" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The following weighted-graph examples use this <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Edge</code> class and adjacency-list structure.
        </p>
        <p key="p-2-106" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 2 — Shortest Path Algorithms</strong>
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "3. BFS Shortest Path",
    summary: "Breadth-First Search for unweighted graphs, level-by-level exploration, parent tracking, and path reconstruction.",
    content: (
      <div className="space-y-4">
        <p key="p-3-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Breadth-First Search is one of the simplest shortest-path algorithms.
        </p>
        <p key="p-3-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It finds the shortest path in an unweighted graph, or a graph in which every edge has the same weight.
        </p>
        <h3 key="h3-3-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.1 How BFS Works
        </h3>
        <p key="p-3-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS explores vertices level by level.
        </p>
        <p key="p-3-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose the graph is:
        </p>
        <div key="code-3-22" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`       0
      / \\
     1   2
    /     \\
   3       4
    \\     /
      \\  /
       5`}</code>
          </pre>
        </div>
        <p key="p-3-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Starting from vertex 0:
        </p>
        <ul key="ul-3-29" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Level 0: <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">0</code></li>
          <li>Level 1: <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">1, 2</code></li>
          <li>Level 2: <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">3, 4</code></li>
          <li>Level 3: <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">5</code></li>
      </ul>
        <p key="p-3-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The first time BFS visits a vertex, it has found a path with the minimum number of edges to that vertex.
        </p>
        <h3 key="h3-3-32" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.2 BFS Algorithm
        </h3>
        <ol key="ol-3-42" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Create a queue.</li>
          <li>Set the source distance to zero.</li>
          <li>Mark the source as visited.</li>
          <li>Insert the source into the queue.</li>
          <li>Remove a vertex from the queue.</li>
          <li>Visit each unvisited neighbor.</li>
          <li>Set its distance to the current distance plus one.</li>
          <li>Continue until the queue is empty.</li>
      </ol>
        <h3 key="h3-3-43" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.3 Java Implementation
        </h3>
        <p key="p-3-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This version calculates shortest distances and stores parents so that the actual path can be reconstructed.
        </p>
        <div key="code-3-117" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class BFSShortestPath {

    public static List<Integer> shortestPath(
            List<List<Integer>> graph,
            int source,
            int destination) {

        int n = graph.size();

        int[] distance = new int[n];
        int[] parent = new int[n];

        Arrays.fill(distance, -1);
        Arrays.fill(parent, -1);

        Queue<Integer> queue = new ArrayDeque<>();

        distance[source] = 0;
        queue.offer(source);

        while (!queue.isEmpty()) {

            int current = queue.poll();

            if (current == destination) {
                break;
            }

            for (int neighbor : graph.get(current)) {

                if (distance[neighbor] == -1) {

                    distance[neighbor] =
                        distance[current] + 1;

                    parent[neighbor] = current;

                    queue.offer(neighbor);
                }
            }
        }

        if (distance[destination] == -1) {
            return Collections.emptyList();
        }

        List<Integer> path = new ArrayList<>();

        int current = destination;

        while (current != -1) {

            path.add(current);

            if (current == source) {
                break;
            }

            current = parent[current];
        }

        Collections.reverse(path);

        return path;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-3-118" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example output:
        </p>
        <div key="code-3-127" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Source: 0
Destination: 5

Shortest path:
[0, 1, 3, 5]`}</code>
          </pre>
        </div>
        <p key="p-3-128" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There may be multiple shortest paths of equal length. BFS returns one of them, depending on adjacency-list order.
        </p>
        <h3 key="h3-3-130" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.4 Complexity
        </h3>
        <div key="table-3-138" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Operation</th>
                <th className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Visiting vertices</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Processing edges</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Total time</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V+E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Auxiliary space</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V)</span></td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-3-139" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.5 When to Use BFS
        </h3>
        <p key="p-3-141" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use BFS when:
        </p>
        <ul key="ul-3-148" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>The graph is unweighted.</li>
          <li>Every edge has the same cost.</li>
          <li>You need the minimum number of transitions.</li>
          <li>You are solving shortest paths in a grid with equal movement costs.</li>
          <li>You need minimum moves in puzzles or state-transition problems.</li>
      </ul>
        <p key="p-3-149" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Interview examples:</strong>
        </p>
        <ul key="ul-3-156" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Shortest path in an unweighted graph.</li>
          <li>Minimum number of steps to reach a target.</li>
          <li>Word Ladder.</li>
          <li>Minimum moves in a knight's tour.</li>
          <li>Shortest path in a binary matrix.</li>
      </ul>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Dijkstra's Algorithm",
    summary: "Nonnegative weighted shortest paths, edge relaxation, PriorityQueue state modeling, and stale entry pruning.",
    content: (
      <div className="space-y-4">
        <p key="p-4-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra's algorithm is one of the most important shortest-path algorithms.
        </p>
        <p key="p-4-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It finds the shortest distance from a single source vertex to every other reachable vertex in a weighted graph with <strong className="font-bold text-stone-900">nonnegative edge weights</strong>.
        </p>
        <p key="p-4-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Nonnegative edge weights required
        </p>
        <h3 key="h3-4-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.1 Why Do We Need Dijkstra?
        </h3>
        <p key="p-4-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS works well when every edge has the same cost.
        </p>
        <p key="p-4-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          However, consider:
        </p>
        <div key="code-4-21" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A --2-- B
|       |
5       1
|       |
C --2-- D`}</code>
          </pre>
        </div>
        <p key="p-4-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Different edges have different costs.
        </p>
        <p key="p-4-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We cannot simply choose the path with the fewest edges.
        </p>
        <p key="p-4-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra always processes the vertex with the smallest currently known distance.
        </p>
        <p key="p-4-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This allows it to efficiently discover shortest paths.
        </p>
        <h3 key="h3-4-30" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.2 Core Concept: Relaxation
        </h3>
        <p key="p-4-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Relaxation is the fundamental operation used in shortest-path algorithms.
        </p>
        <p key="p-4-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose we know the distance to vertex <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">u</code>.
        </p>
        <p key="p-4-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We are examining an edge:
        </p>
        <div key="code-4-41" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`u → v`}</code>
          </pre>
        </div>
        <p key="p-4-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          with weight <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">w</code>.
        </p>
        <p key="p-4-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The potential new distance to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">v</code> is:
        </p>
        <p key="p-4-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> newDistance=dist[u]+w </span>
        </p>
        <p key="p-4-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If this is smaller than the currently known distance:
        </p>
        <p key="p-4-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dist[u]+w&lt;dist[v] </span>
        </p>
        <p key="p-4-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          we update:
        </p>
        <p key="p-4-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dist[v]=dist[u]+w </span>
        </p>
        <p key="p-4-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In Java:
        </p>
        <div key="code-4-64" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`if (dist[u] + weight < dist[v]) {

    dist[v] = dist[u] + weight;
}`}</code>
          </pre>
        </div>
        <p key="p-4-65" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This operation is called <strong className="font-bold text-stone-900">edge relaxation</strong>.
        </p>
        <h3 key="h3-4-67" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.3 Dijkstra's Algorithm Step by Step
        </h3>
        <p key="p-4-69" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider this graph:
        </p>
        <div key="code-4-83" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`       4
   0 ------ 1
   |       /|
 1 |    2/  | 1
   |   /    |
   2 ------ 3
       5    |
            | 3
            |
            4`}</code>
          </pre>
        </div>
        <p key="p-4-84" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The graph has the following edges:
        </p>
        <div key="table-4-94" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Edge</th>
                <th className="p-3 font-semibold">Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">0 → 1</td>
                  <td className="p-3">4</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">0 → 2</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">2 → 1</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">1 → 3</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">2 → 3</td>
                  <td className="p-3">5</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">3 → 4</td>
                  <td className="p-3">3</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-4-95" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Assume an undirected graph and source vertex 0.
        </p>
        <p key="p-4-97" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initially:
        </p>
        <div key="code-4-106" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dist[0] = 0
dist[1] = ∞
dist[2] = ∞
dist[3] = ∞
dist[4] = ∞`}</code>
          </pre>
        </div>
        <p key="p-4-107" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Step 1 — Process vertex 0</strong>
        </p>
        <p key="p-4-109" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Its neighbors are 1 and 2.
        </p>
        <div key="code-4-115" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dist[1] = 4
dist[2] = 1`}</code>
          </pre>
        </div>
        <p key="p-4-116" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Step 2 — Process vertex 2</strong>
        </p>
        <p key="p-4-118" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Vertex 2 has the smallest known distance, which is 1.
        </p>
        <p key="p-4-120" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Relax its outgoing edges:
        </p>
        <div key="code-4-127" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 2 → 1

Distance = 1 + 2 = 3`}</code>
          </pre>
        </div>
        <p key="p-4-128" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The previous distance to vertex 1 was 4, so update it to 3.
        </p>
        <p key="p-4-130" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Also:
        </p>
        <div key="code-4-137" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 2 → 3

Distance = 1 + 5 = 6`}</code>
          </pre>
        </div>
        <p key="p-4-138" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now:
        </p>
        <div key="code-4-143" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dist = [0, 3, 1, 6, ∞]`}</code>
          </pre>
        </div>
        <p key="p-4-144" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Step 3 — Process vertex 1</strong>
        </p>
        <p key="p-4-146" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Relax the edge to vertex 3:
        </p>
        <div key="code-4-153" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 2 → 1 → 3

Distance = 1 + 2 + 1 = 4`}</code>
          </pre>
        </div>
        <p key="p-4-154" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The previous distance to vertex 3 was 6.
        </p>
        <p key="p-4-156" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Update it to 4.
        </p>
        <p key="p-4-158" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Step 4 — Process vertex 3</strong>
        </p>
        <p key="p-4-160" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Relax the edge to vertex 4:
        </p>
        <div key="code-4-167" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 2 → 1 → 3 → 4

Distance = 1 + 2 + 1 + 3 = 7`}</code>
          </pre>
        </div>
        <p key="p-4-168" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Final distances:</strong>
        </p>
        <div key="table-4-177" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Vertex</th>
                <th className="p-3 font-semibold">Shortest distance from 0</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">1</td>
                  <td className="p-3">3</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">2</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">3</td>
                  <td className="p-3">4</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">4</td>
                  <td className="p-3">7</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-4-178" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.4 Priority Queue in Dijkstra
        </h3>
        <p key="p-4-180" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A normal queue processes vertices in insertion order.
        </p>
        <p key="p-4-182" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra requires us to process the vertex having the smallest current distance.
        </p>
        <p key="p-4-184" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We therefore use a <strong className="font-bold text-stone-900">PriorityQueue</strong>.
        </p>
        <p key="p-4-186" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Java provides it through:
        </p>
        <div key="code-4-191" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`PriorityQueue<Integer> pq = new PriorityQueue<>();`}</code>
          </pre>
        </div>
        <p key="p-4-192" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          However, we need to organize vertices by their current distances.
        </p>
        <p key="p-4-194" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Create a state class:
        </p>
        <div key="code-4-208" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`static class State {

    int node;
    long distance;

    State(int node, long distance) {
        this.node = node;
        this.distance = distance;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-4-209" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Then:
        </p>
        <div key="code-4-217" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`PriorityQueue<State> pq =
    new PriorityQueue<>(
        Comparator.comparingLong(state -> state.distance)
    );`}</code>
          </pre>
        </div>
        <h3 key="h3-4-218" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.5 Complete Java Implementation
        </h3>
        <div key="code-4-336" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class Dijkstra {

    static class Edge {

        int to;
        long weight;

        Edge(int to, long weight) {
            this.to = to;
            this.weight = weight;
        }
    }

    static class State {

        int node;
        long distance;

        State(int node, long distance) {
            this.node = node;
            this.distance = distance;
        }
    }

    static final long INF = Long.MAX_VALUE / 4;

    public static long[] shortestPath(
            List<List<Edge>> graph,
            int source) {

        int n = graph.size();

        long[] dist = new long[n];

        Arrays.fill(dist, INF);

        PriorityQueue<State> pq =
            new PriorityQueue<>(
                Comparator.comparingLong(s -> s.distance)
            );

        dist[source] = 0;

        pq.offer(new State(source, 0));

        while (!pq.isEmpty()) {

            State current = pq.poll();

            int u = current.node;
            long currentDistance = current.distance;

            // Ignore outdated priority queue entries.
            if (currentDistance != dist[u]) {
                continue;
            }

            for (Edge edge : graph.get(u)) {

                int v = edge.to;
                long weight = edge.weight;

                long newDistance =
                    dist[u] + weight;

                if (newDistance < dist[v]) {

                    dist[v] = newDistance;

                    pq.offer(
                        new State(v, newDistance)
                    );
                }
            }
        }

        return dist;
    }

    public static void main(String[] args) {

        int n = 5;

        List<List<Edge>> graph = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        graph.get(0).add(new Edge(1, 4));
        graph.get(0).add(new Edge(2, 1));

        graph.get(2).add(new Edge(1, 2));
        graph.get(1).add(new Edge(3, 1));

        graph.get(2).add(new Edge(3, 5));
        graph.get(3).add(new Edge(4, 3));

        long[] result = shortestPath(graph, 0);

        for (int i = 0; i < n; i++) {

            if (result[i] == INF) {
                System.out.println(i + " : Unreachable");
            }

            else {
                System.out.println(i + " : " + result[i]);
            }
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-4-337" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Output:</strong>
        </p>
        <div key="code-4-346" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 : 0
1 : 3
2 : 1
3 : 4
4 : 7`}</code>
          </pre>
        </div>
        <p key="p-4-347" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This example uses directed edges. To create an undirected graph, add the reverse edge as well.
        </p>
        <h3 key="h3-4-349" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.6 Why Check Outdated Priority Queue Entries?
        </h3>
        <p key="p-4-351" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider this sequence:
        </p>
        <div key="code-4-357" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Vertex 1 initially gets distance 10.
Later, a better path gives distance 5.`}</code>
          </pre>
        </div>
        <p key="p-4-358" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The priority queue may contain both:
        </p>
        <div key="code-4-364" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`(1, 10)
(1, 5)`}</code>
          </pre>
        </div>
        <p key="p-4-365" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">(1, 5)</code> gets processed, the distance is updated correctly.
        </p>
        <p key="p-4-367" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The old entry <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">(1, 10)</code> might still exist.
        </p>
        <p key="p-4-369" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We ignore it with:
        </p>
        <div key="code-4-376" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`if (currentDistance != dist[u]) {
    continue;
}`}</code>
          </pre>
        </div>
        <p key="p-4-377" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This avoids unnecessary processing.
        </p>
        <h3 key="h3-4-379" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.7 Complexity
        </h3>
        <p key="p-4-381" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Using adjacency lists and a binary heap:
        </p>
        <ul key="ul-4-385" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Time: <span className="font-mono text-orange-300 font-semibold">O((V+E)\log V)</span>, commonly expressed as <span className="font-mono text-orange-300 font-semibold">O((V+E)\log V)</span>.</li>
          <li>Space: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>, including the graph, distance array, and priority queue.</li>
      </ul>
        <p key="p-4-386" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For sparse graphs, this is generally very efficient.
        </p>
        <h3 key="h3-4-388" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.8 Limitations of Dijkstra
        </h3>
        <p key="p-4-390" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra does not guarantee correct results with negative edge weights.
        </p>
        <p key="p-4-392" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-4-399" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B = 2
A → C = 5
C → B = -10`}</code>
          </pre>
        </div>
        <p key="p-4-400" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The direct route to B costs 2, but another route costs:
        </p>
        <p key="p-4-402" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 5+(-10)=-5 </span>
        </p>
        <p key="p-4-404" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The algorithm's greedy assumption that a processed vertex has its final shortest distance is no longer valid.
        </p>
        <p key="p-4-406" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use Bellman-Ford when negative edge weights are present.
        </p>
        <h4 key="h4-4-408" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          When to Use Dijkstra
        </h4>
        <ul key="ul-4-415" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Road navigation with nonnegative travel costs.</li>
          <li>Network routing.</li>
          <li>Weighted graph shortest paths.</li>
          <li>Finding the cheapest nonnegative-cost route.</li>
          <li>Single-source shortest paths in sparse graphs.</li>
      </ul>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Negative Edge Weights",
    summary: "Understanding negative edges, why greedy Dijkstra fails, and negative edge vs negative-weight cycle distinction.",
    content: (
      <div className="space-y-4">
        <p key="p-5-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A negative edge means traversing an edge reduces the total path cost.
        </p>
        <p key="p-5-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-5-11" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B = 5
B → C = -3
C → D = 2`}</code>
          </pre>
        </div>
        <p key="p-5-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Total cost:
        </p>
        <p key="p-5-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 5-3+2=4 </span>
        </p>
        <p key="p-5-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Negative edges may represent:
        </p>
        <ul key="ul-5-22" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Financial gains or losses.</li>
          <li>Credits or rebates.</li>
          <li>Cost adjustments.</li>
          <li>Rewards in state-transition models.</li>
      </ul>
        <h3 key="h3-5-23" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.1 Why Are Negative Weights Important?
        </h3>
        <p key="p-5-25" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A greedy shortest-path algorithm such as Dijkstra relies on nonnegative edges.
        </p>
        <p key="p-5-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          With negative weights, a route that initially looks expensive can later become cheaper.
        </p>
        <p key="p-5-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, algorithms must account for the possibility that a previously discovered shortest distance can improve.
        </p>
        <p key="p-5-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Two important solutions are:
        </p>
        <ul key="ul-5-35" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Bellman-Ford.</li>
          <li>Floyd-Warshall.</li>
      </ul>
        <p key="p-5-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A third useful approach is topological relaxation when the graph is a DAG, covered later.
        </p>
        <h3 key="h3-5-38" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.2 Negative Edge vs Negative Cycle
        </h3>
        <p key="p-5-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These are different concepts.
        </p>
        <p key="p-5-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Negative edge:</strong>
        </p>
        <div key="code-5-47" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B = -5`}</code>
          </pre>
        </div>
        <p key="p-5-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A single negative edge is not necessarily a problem.
        </p>
        <p key="p-5-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Negative cycle:</strong>
        </p>
        <div key="code-5-57" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B = 2
B → C = -5
C → A = 1`}</code>
          </pre>
        </div>
        <p key="p-5-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The total cycle cost is:
        </p>
        <p key="p-5-60" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2-5+1=-2 </span>
        </p>
        <p key="p-5-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Every time we travel around this cycle, the total cost decreases by 2.
        </p>
        <p key="p-5-64" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If such a cycle is reachable from the source and can affect the destination, there is no finite shortest path.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Bellman-Ford Algorithm",
    summary: "V-1 relaxation rounds, O(VE) shortest paths with negative weights, and reachable negative cycle detection.",
    content: (
      <div className="space-y-4">
        <p key="p-6-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Bellman-Ford calculates shortest paths from one source vertex, even when negative edge weights exist.
        </p>
        <p key="p-6-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It can also detect negative-weight cycles reachable from the source.
        </p>
        <p key="p-6-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Supports negative edge weights
        </p>
        <h3 key="h3-6-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.1 Core Idea
        </h3>
        <p key="p-6-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Bellman-Ford repeatedly relaxes every edge.
        </p>
        <p key="p-6-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The key theoretical observation is:
        </p>
        <p key="p-6-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A shortest simple path in a graph with no relevant negative cycle contains at most <span className="font-mono text-orange-300 font-semibold">V-1</span> edges.
        </p>
        <p key="p-6-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-6-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A simple path cannot visit the same vertex twice. If it does, it contains a cycle, and removing a nonnegative cycle cannot increase the path cost.
        </p>
        <p key="p-6-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A path with at most <span className="font-mono text-orange-300 font-semibold">V-1</span> edges can be discovered after at most <span className="font-mono text-orange-300 font-semibold">V-1</span> rounds of edge relaxation.
        </p>
        <h3 key="h3-6-22" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.2 Algorithm Steps
        </h3>
        <ol key="ol-6-31" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Initialize every distance to infinity.</li>
          <li>Set the source distance to zero.</li>
          <li>Repeat <span className="font-mono text-orange-300 font-semibold">V-1</span> times.</li>
          <li>During each iteration, examine every edge.</li>
          <li>Relax the edge if a shorter route is found.</li>
          <li>Perform one additional pass.</li>
          <li>If any distance can still be reduced, a reachable negative cycle exists.</li>
      </ol>
        <h3 key="h3-6-32" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.3 Worked Example
        </h3>
        <p key="p-6-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-6-43" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 = 4
0 → 2 = 5
1 → 2 = -2
1 → 3 = 6
2 → 3 = 3`}</code>
          </pre>
        </div>
        <p key="p-6-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Source:
        </p>
        <div key="code-6-49" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0`}</code>
          </pre>
        </div>
        <p key="p-6-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initially:
        </p>
        <div key="code-6-55" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dist = [0, ∞, ∞, ∞]`}</code>
          </pre>
        </div>
        <p key="p-6-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Relax the edges:
        </p>
        <div key="code-6-63" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1:

dist[1] = 4`}</code>
          </pre>
        </div>
        <div key="code-6-69" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 2:

dist[2] = 5`}</code>
          </pre>
        </div>
        <div key="code-6-76" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 → 2:

dist[2] = min(5, 4 - 2)
        = 2`}</code>
          </pre>
        </div>
        <div key="code-6-82" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 → 3:

dist[3] = 10`}</code>
          </pre>
        </div>
        <div key="code-6-89" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2 → 3:

dist[3] = min(10, 2 + 3)
        = 5`}</code>
          </pre>
        </div>
        <p key="p-6-90" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Final distances:
        </p>
        <div key="code-6-95" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 4, 2, 5]`}</code>
          </pre>
        </div>
        <h3 key="h3-6-96" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.4 Java Implementation
        </h3>
        <p key="p-6-98" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For Bellman-Ford, it is convenient to store all edges in a list.
        </p>
        <div key="code-6-193" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class BellmanFord {

    static final long INF = Long.MAX_VALUE / 4;

    static class Edge {

        int from;
        int to;
        long weight;

        Edge(int from, int to, long weight) {

            this.from = from;
            this.to = to;
            this.weight = weight;
        }
    }

    static class Result {

        long[] distance;
        boolean hasNegativeCycle;

        Result(long[] distance, boolean hasNegativeCycle) {

            this.distance = distance;
            this.hasNegativeCycle = hasNegativeCycle;
        }
    }

    public static Result shortestPath(
            int vertices,
            List<Edge> edges,
            int source) {

        long[] dist = new long[vertices];

        Arrays.fill(dist, INF);

        dist[source] = 0;

        // Relax all edges V - 1 times.
        for (int i = 0; i < vertices - 1; i++) {

            boolean updated = false;

            for (Edge edge : edges) {

                int u = edge.from;
                int v = edge.to;
                long weight = edge.weight;

                if (dist[u] == INF) {
                    continue;
                }

                if (dist[u] + weight < dist[v]) {

                    dist[v] = dist[u] + weight;

                    updated = true;
                }
            }

            // Optimization: stop if no distance changed.
            if (!updated) {
                break;
            }
        }

        // One more pass checks for a reachable negative cycle.
        boolean negativeCycle = false;

        for (Edge edge : edges) {

            int u = edge.from;
            int v = edge.to;

            if (dist[u] != INF
                    && dist[u] + edge.weight < dist[v]) {

                negativeCycle = true;
                break;
            }
        }

        return new Result(dist, negativeCycle);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-6-194" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Complexity:</strong>
        </p>
        <ul key="ul-6-199" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Time: <span className="font-mono text-orange-300 font-semibold">O(VE)</span>.</li>
          <li>Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(V)</span>, excluding the edge-list input.</li>
          <li>Graph storage: <span className="font-mono text-orange-300 font-semibold">O(E)</span>.</li>
      </ul>
        <h3 key="h3-6-200" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.5 Negative Cycle Detection
        </h3>
        <p key="p-6-202" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose we complete the normal <span className="font-mono text-orange-300 font-semibold">V-1</span> relaxation iterations.
        </p>
        <p key="p-6-204" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If another relaxation is possible, the distance can still improve.
        </p>
        <p key="p-6-206" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          That indicates a reachable negative cycle.
        </p>
        <p key="p-6-208" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-6-210" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Because every shortest simple path would already have been discovered within <span className="font-mono text-orange-300 font-semibold">V-1</span> edges. Continued improvement means a path involving a cycle can keep reducing the cost.
        </p>
        <h3 key="h3-6-212" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.6 Important Negative Cycle Detail
        </h3>
        <p key="p-6-214" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The implementation above detects negative cycles reachable from the selected source.
        </p>
        <p key="p-6-216" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It does not necessarily detect a negative cycle in a disconnected component.
        </p>
        <p key="p-6-218" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          To detect any negative cycle in the entire graph, you can introduce a virtual super-source connected to every vertex with a zero-weight edge, or initialize all distances to zero and perform the Bellman-Ford detection process.
        </p>
        <p key="p-6-220" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Also, when a negative cycle is reachable from the source, not every destination is necessarily affected.
        </p>
        <p key="p-6-222" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A destination has no finite shortest path if it is reachable from that negative cycle.
        </p>
        <h3 key="h3-6-224" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.7 When to Use Bellman-Ford
        </h3>
        <ul key="ul-6-231" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Graphs containing negative edge weights.</li>
          <li>Negative cycle detection.</li>
          <li>Financial or cost-adjustment graph models.</li>
          <li>When Dijkstra's nonnegative-edge assumption does not hold.</li>
          <li>When graph size is small enough for <span className="font-mono text-orange-300 font-semibold">O(VE)</span>.</li>
      </ul>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Floyd-Warshall Algorithm",
    summary: "All-pairs shortest paths via dynamic programming O(V³), intermediate vertex k, and diagonal negative cycles.",
    content: (
      <div className="space-y-4">
        <p key="p-7-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Floyd-Warshall solves the all-pairs shortest-path problem.
        </p>
        <p key="p-7-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Instead of calculating shortest paths from one source, it calculates shortest distances between every pair of vertices.
        </p>
        <p key="p-7-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          All-pairs shortest paths
        </p>
        <p key="p-7-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It uses dynamic programming.
        </p>
        <h3 key="h3-7-10" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.1 Core Idea
        </h3>
        <p key="p-7-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose we want to find the shortest distance from vertex <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">i</code> to vertex <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">j</code>.
        </p>
        <p key="p-7-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We initially know the direct distance.
        </p>
        <p key="p-7-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          But what if travelling through another vertex <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code> provides a shorter path?
        </p>
        <p key="p-7-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We compare:
        </p>
        <ol key="ol-7-22" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>The current distance from <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">i</code> to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">j</code>.</li>
          <li>The route from <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">i</code> to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code> and then from <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code> to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">j</code>.</li>
      </ol>
        <p key="p-7-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The recurrence is:
        </p>
        <p key="p-7-25" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dist[i][j]= \min \left( dist[i][j], dist[i][k]+dist[k][j] \right) </span>
        </p>
        <p key="p-7-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We consider every vertex as an intermediate vertex.
        </p>
        <h3 key="h3-7-29" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.2 Dynamic Programming Interpretation
        </h3>
        <p key="p-7-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Define:
        </p>
        <p key="p-7-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> DP[k][i][j] </span>
        </p>
        <p key="p-7-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          as the shortest path from <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">i</code> to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">j</code> using only vertices from the first <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code> vertices as intermediate vertices.
        </p>
        <p key="p-7-37" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The transition is:
        </p>
        <p key="p-7-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> DP[k][i][j] = \min \begin&#123;cases&#125; DP[k-1][i][j]\\ DP[k-1][i][k]+DP[k-1][k][j] \end&#123;cases&#125; </span>
        </p>
        <p key="p-7-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We do not need a three-dimensional array because we can update the distance matrix in place.
        </p>
        <h3 key="h3-7-43" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.3 Example
        </h3>
        <p key="p-7-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-7-53" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 = 5
0 → 2 = 10
1 → 2 = 3
2 → 0 = 2`}</code>
          </pre>
        </div>
        <p key="p-7-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initially:
        </p>
        <div key="code-7-63" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`       0    1    2

0      0    5   10
1      ∞    0    3
2      2    ∞    0`}</code>
          </pre>
        </div>
        <p key="p-7-64" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We discover that:
        </p>
        <div key="code-7-69" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 → 1 → 2`}</code>
          </pre>
        </div>
        <p key="p-7-70" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          has cost:
        </p>
        <p key="p-7-72" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 5+3=8 </span>
        </p>
        <p key="p-7-74" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is better than the direct route cost 10.
        </p>
        <p key="p-7-76" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The updated distance matrix becomes:
        </p>
        <div key="code-7-85" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`       0    1    2

0      0    5    8
1      5    0    3
2      2    7    0`}</code>
          </pre>
        </div>
        <p key="p-7-86" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The remaining values are obtained by considering all possible intermediate vertices.
        </p>
        <h3 key="h3-7-88" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.4 Java Implementation
        </h3>
        <div key="code-7-143" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.Arrays;

public class FloydWarshall {

    static final long INF = Long.MAX_VALUE / 4;

    public static void floydWarshall(long[][] dist) {

        int n = dist.length;

        for (int k = 0; k < n; k++) {

            for (int i = 0; i < n; i++) {

                if (dist[i][k] == INF) {
                    continue;
                }

                for (int j = 0; j < n; j++) {

                    if (dist[k][j] == INF) {
                        continue;
                    }

                    long newDistance =
                        dist[i][k] + dist[k][j];

                    if (newDistance < dist[i][j]) {

                        dist[i][j] = newDistance;
                    }
                }
            }
        }
    }

    public static void main(String[] args) {

        long[][] dist = {
            {0,   5,  10},
            {INF, 0,   3},
            {2, INF,   0}
        };

        floydWarshall(dist);

        for (long[] row : dist) {
            System.out.println(Arrays.toString(row));
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-7-144" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Output:</strong>
        </p>
        <div key="code-7-151" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 5, 8]
[5, 0, 3]
[2, 7, 0]`}</code>
          </pre>
        </div>
        <h3 key="h3-7-152" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.5 Negative Cycle Detection
        </h3>
        <p key="p-7-154" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Floyd-Warshall can detect negative cycles.
        </p>
        <p key="p-7-156" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          After the algorithm finishes, examine the diagonal:
        </p>
        <div key="code-7-161" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dist[i][i]`}</code>
          </pre>
        </div>
        <p key="p-7-162" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Normally, the shortest distance from a vertex to itself is zero.
        </p>
        <p key="p-7-164" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If:
        </p>
        <p key="p-7-166" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dist[i][i]&lt;0 </span>
        </p>
        <p key="p-7-168" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          a negative cycle exists.
        </p>
        <p key="p-7-170" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Add this check:
        </p>
        <div key="code-7-181" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`for (int i = 0; i < n; i++) {

    if (dist[i][i] < 0) {

        System.out.println("Negative cycle detected");
    }
}`}</code>
          </pre>
        </div>
        <h3 key="h3-7-182" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.6 Path Reconstruction
        </h3>
        <p key="p-7-184" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Sometimes you need the actual shortest path rather than just the distance.
        </p>
        <p key="p-7-186" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Maintain another matrix:
        </p>
        <div key="code-7-191" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[][] next = new int[n][n];`}</code>
          </pre>
        </div>
        <p key="p-7-192" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initially:
        </p>
        <ul key="ul-7-197" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">next[i][j] = j</code> when a direct edge exists.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">next[i][j] = -1</code> when no route exists.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">next[i][i] = i</code>.</li>
      </ul>
        <p key="p-7-198" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Whenever you improve:
        </p>
        <div key="code-7-203" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dist[i][j] = dist[i][k] + dist[k][j];`}</code>
          </pre>
        </div>
        <p key="p-7-204" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          also update:
        </p>
        <div key="code-7-209" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`next[i][j] = next[i][k];`}</code>
          </pre>
        </div>
        <p key="p-7-210" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          To reconstruct the route, repeatedly follow <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">next[current][destination]</code>.
        </p>
        <p key="p-7-212" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is useful in route-planning applications.
        </p>
        <h3 key="h3-7-214" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.7 Complexity
        </h3>
        <div key="table-7-221" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Operation</th>
                <th className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Time</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V^3)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Distance matrix</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V^2)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Optional next matrix</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V^2)</span></td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-7-222" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.8 When to Use Floyd-Warshall
        </h3>
        <ul key="ul-7-229" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>All-pairs shortest paths.</li>
          <li>Small or medium dense graphs.</li>
          <li>When many source-destination queries are required.</li>
          <li>Detecting negative cycles.</li>
          <li>Transitive closure and reachability variations.</li>
      </ul>
        <p key="p-7-230" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Important:</strong> Floyd-Warshall is usually not the best choice for very large sparse graphs because of its cubic time complexity.
        </p>
      </div>
    )
  },
  {
    id: 8,
    title: "8. Shortest Paths in Directed Acyclic Graphs",
    summary: "Topological sorting (Kahn's) + single-pass edge relaxation in O(V + E) supporting negative weights.",
    content: (
      <div className="space-y-4">
        <p key="p-8-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A DAG is a Directed Acyclic Graph.
        </p>
        <p key="p-8-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It is a directed graph that contains no directed cycles.
        </p>
        <p key="p-8-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-8-17" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`       0
      / \\
     1   2
      \\ /
       3
       |
       4`}</code>
          </pre>
        </div>
        <p key="p-8-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A DAG has a very useful property:
        </p>
        <p key="p-8-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It can be arranged in a topological order such that every directed edge goes from an earlier vertex to a later vertex.
        </p>
        <p key="p-8-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This allows shortest paths to be calculated efficiently.
        </p>
        <h3 key="h3-8-24" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.1 Why Does a DAG Need a Different Algorithm?
        </h3>
        <p key="p-8-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra requires nonnegative weights.
        </p>
        <p key="p-8-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Bellman-Ford supports negative weights but takes <span className="font-mono text-orange-300 font-semibold">O(VE)</span>.
        </p>
        <p key="p-8-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A DAG allows a more efficient approach:
        </p>
        <ol key="ol-8-35" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Find a topological ordering.</li>
          <li>Process vertices in that order.</li>
          <li>Relax all outgoing edges.</li>
      </ol>
        <p key="p-8-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Because all incoming routes to a vertex are processed before we process that vertex, its shortest distance can be finalized in one pass.
        </p>
        <h3 key="h3-8-38" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.2 Important Advantage
        </h3>
        <p key="p-8-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          DAG shortest-path algorithms can handle negative edge weights.
        </p>
        <p key="p-8-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-8-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A DAG cannot contain a cycle at all, so a negative cycle is impossible.
        </p>
        <h3 key="h3-8-46" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.3 Java Implementation
        </h3>
        <p key="p-8-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This implementation uses Kahn's algorithm for topological sorting.
        </p>
        <div key="code-8-150" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class DAGShortestPath {

    static class Edge {

        int to;
        long weight;

        Edge(int to, long weight) {
            this.to = to;
            this.weight = weight;
        }
    }

    static final long INF = Long.MAX_VALUE / 4;

    public static long[] shortestPath(
            List<List<Edge>> graph,
            int source) {

        int n = graph.size();

        int[] indegree = new int[n];

        // Calculate indegree.
        for (int u = 0; u < n; u++) {

            for (Edge edge : graph.get(u)) {

                indegree[edge.to]++;
            }
        }

        // Topological sorting using Kahn's algorithm.
        Queue<Integer> queue = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {

            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        List<Integer> topo = new ArrayList<>();

        while (!queue.isEmpty()) {

            int u = queue.poll();

            topo.add(u);

            for (Edge edge : graph.get(u)) {

                indegree[edge.to]--;

                if (indegree[edge.to] == 0) {
                    queue.offer(edge.to);
                }
            }
        }

        if (topo.size() != n) {
            throw new IllegalArgumentException(
                "Graph is not a DAG"
            );
        }

        long[] dist = new long[n];

        Arrays.fill(dist, INF);

        dist[source] = 0;

        // Relax edges in topological order.
        for (int u : topo) {

            if (dist[u] == INF) {
                continue;
            }

            for (Edge edge : graph.get(u)) {

                int v = edge.to;

                long newDistance =
                    dist[u] + edge.weight;

                if (newDistance < dist[v]) {

                    dist[v] = newDistance;
                }
            }
        }

        return dist;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-8-151" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Complexity:</strong>
        </p>
        <ul key="ul-8-157" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Topological sorting: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>.</li>
          <li>Edge relaxation: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>.</li>
          <li>Total time: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>.</li>
          <li>Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(V)</span>, excluding graph storage.</li>
      </ul>
        <h3 key="h3-8-158" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.4 When to Use DAG Shortest Paths
        </h3>
        <ul key="ul-8-166" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Dependency graphs.</li>
          <li>Task scheduling with costs.</li>
          <li>Workflow optimization.</li>
          <li>Project planning.</li>
          <li>Directed graphs that are guaranteed to be acyclic.</li>
          <li>Graphs with negative edges but no cycles.</li>
      </ul>
        <p key="p-8-167" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 3 — Minimum Spanning Trees</strong>
        </p>
      </div>
    )
  },
  {
    id: 9,
    title: "9. Minimum Spanning Tree (MST)",
    summary: "Definition of spanning tree (V-1 edges), minimum-cost network vs shortest paths, and MST properties.",
    content: (
      <div className="space-y-4">
        <p key="p-9-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Shortest paths and minimum spanning trees are two different graph optimization problems.
        </p>
        <p key="p-9-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An MST finds a minimum-cost collection of edges that connects every vertex in a connected, undirected, weighted graph without creating cycles.
        </p>
        <p key="p-9-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Connected, undirected, weighted graph
        </p>
        <h3 key="h3-9-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.1 What Is a Spanning Tree?
        </h3>
        <p key="p-9-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider a connected graph:
        </p>
        <div key="code-9-19" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`    A
   / \\
  B---C
   \\ /
    D`}</code>
          </pre>
        </div>
        <p key="p-9-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A spanning tree:
        </p>
        <ul key="ul-9-26" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Includes every vertex.</li>
          <li>Connects all vertices.</li>
          <li>Contains no cycles.</li>
          <li>Has exactly <span className="font-mono text-orange-300 font-semibold">V-1</span> edges.</li>
      </ul>
        <p key="p-9-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For four vertices:
        </p>
        <p key="p-9-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> V-1=4-1=3 </span>
        </p>
        <p key="p-9-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Therefore, every spanning tree contains exactly three edges.
        </p>
        <p key="p-9-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There can be multiple possible spanning trees.
        </p>
        <h3 key="h3-9-35" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.2 What Makes It a Minimum Spanning Tree?
        </h3>
        <p key="p-9-37" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A minimum spanning tree is the spanning tree whose total edge weight is minimum.
        </p>
        <p key="p-9-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose the graph has edges:
        </p>
        <div key="table-9-48" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Edge</th>
                <th className="p-3 font-semibold">Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">A — B</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">A — C</td>
                  <td className="p-3">4</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">B — C</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">B — D</td>
                  <td className="p-3">5</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">C — D</td>
                  <td className="p-3">3</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-9-49" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Possible spanning tree:
        </p>
        <div key="code-9-56" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A — B = 1
B — C = 2
C — D = 3`}</code>
          </pre>
        </div>
        <p key="p-9-57" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Total weight:
        </p>
        <p key="p-9-59" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 1+2+3=6 </span>
        </p>
        <p key="p-9-61" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is the minimum spanning tree.
        </p>
        <h3 key="h3-9-63" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.3 Shortest Path vs Minimum Spanning Tree
        </h3>
        <p key="p-9-65" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This distinction is extremely important in interviews.
        </p>
        <div key="table-9-74" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Shortest Path</th>
                <th className="p-3 font-semibold">Minimum Spanning Tree</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Finds the minimum-cost path</td>
                  <td className="p-3">Finds the minimum-cost network</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Usually starts from a source</td>
                  <td className="p-3">Connects all vertices</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Preserves optimal distances from the source</td>
                  <td className="p-3">Minimizes total selected edge weight</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Can be directed or undirected</td>
                  <td className="p-3">Standard MST requires an undirected graph</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Dijkstra, Bellman-Ford</td>
                  <td className="p-3">Prim, Kruskal</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-9-75" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider a network of five cities.
        </p>
        <p key="p-9-77" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A shortest-path problem asks:
        </p>
        <blockquote key="bq-9-79" className="my-3 pl-4 border-l-2 border-orange-500 text-xs md:text-sm text-orange-300/90 italic bg-orange-500/5 py-2 rounded-r-lg">
          What is the cheapest route from City A to City E?
        </blockquote>
        <p key="p-9-81" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An MST problem asks:
        </p>
        <blockquote key="bq-9-83" className="my-3 pl-4 border-l-2 border-orange-500 text-xs md:text-sm text-orange-300/90 italic bg-orange-500/5 py-2 rounded-r-lg">
          What is the cheapest collection of roads that connects all five cities?
        </blockquote>
        <p key="p-9-85" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These are different goals.
        </p>
        <h3 key="h3-9-87" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.4 Important Properties of MST
        </h3>
        <p key="p-9-89" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For a connected undirected graph:
        </p>
        <ol key="ol-9-96" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>An MST contains exactly <span className="font-mono text-orange-300 font-semibold">V-1</span> edges.</li>
          <li>It does not contain cycles.</li>
          <li>It connects every vertex.</li>
          <li>It minimizes the total selected edge weight.</li>
          <li>Multiple MSTs may exist when equal-weight edges create alternative solutions.</li>
      </ol>
        <p key="p-9-97" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A graph with multiple disconnected components has no single spanning tree. Instead, a minimum spanning forest connects each component optimally.
        </p>
      </div>
    )
  },
  {
    id: 10,
    title: "10. Prim's Algorithm",
    summary: "Greedy vertex-growing MST algorithm with PriorityQueue of candidate boundary edges in O(E log V).",
    content: (
      <div className="space-y-4">
        <p key="p-10-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Prim's algorithm constructs an MST by growing a connected tree one vertex at a time.
        </p>
        <p key="p-10-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It starts from any vertex and repeatedly selects the minimum-weight edge that connects the current tree to a new vertex.
        </p>
        <p key="p-10-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Greedy MST algorithm
        </p>
        <h3 key="h3-10-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.1 Core Idea
        </h3>
        <ol key="ol-10-16" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Choose a starting vertex.</li>
          <li>Mark it as part of the MST.</li>
          <li>Examine all edges leaving the current tree.</li>
          <li>Select the smallest edge connecting to an unvisited vertex.</li>
          <li>Add that vertex and edge to the MST.</li>
          <li>Repeat until all vertices are included.</li>
      </ol>
        <p key="p-10-17" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The key rule is:
        </p>
        <p key="p-10-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Never add an edge that connects two vertices already inside the current MST.</strong>
        </p>
        <h3 key="h3-10-21" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.2 Step-by-Step Example
        </h3>
        <p key="p-10-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-10-32" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A --1-- B
|      /|
4    2  5
|  /    |
C --3-- D`}</code>
          </pre>
        </div>
        <p key="p-10-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Edges:
        </p>
        <div key="code-10-42" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A-B = 1
A-C = 4
B-C = 2
B-D = 5
C-D = 3`}</code>
          </pre>
        </div>
        <p key="p-10-43" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Start at A.
        </p>
        <p key="p-10-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Step 1:</strong>
        </p>
        <div key="code-10-50" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A`}</code>
          </pre>
        </div>
        <p key="p-10-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Available edges:
        </p>
        <div key="code-10-57" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A-B = 1
A-C = 4`}</code>
          </pre>
        </div>
        <p key="p-10-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose the smallest:
        </p>
        <div key="code-10-63" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A-B = 1`}</code>
          </pre>
        </div>
        <p key="p-10-64" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Step 2:</strong>
        </p>
        <p key="p-10-66" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Current tree:
        </p>
        <div key="code-10-71" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A — B`}</code>
          </pre>
        </div>
        <p key="p-10-72" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Available edges leading outside the tree:
        </p>
        <div key="code-10-79" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A-C = 4
B-C = 2
B-D = 5`}</code>
          </pre>
        </div>
        <p key="p-10-80" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose:
        </p>
        <div key="code-10-85" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`B-C = 2`}</code>
          </pre>
        </div>
        <p key="p-10-86" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Step 3:</strong>
        </p>
        <p key="p-10-88" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Current tree:
        </p>
        <div key="code-10-95" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A — B
     |
     C`}</code>
          </pre>
        </div>
        <p key="p-10-96" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Available edges:
        </p>
        <div key="code-10-102" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`B-D = 5
C-D = 3`}</code>
          </pre>
        </div>
        <p key="p-10-103" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose:
        </p>
        <div key="code-10-108" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`C-D = 3`}</code>
          </pre>
        </div>
        <p key="p-10-109" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          All four vertices are connected.
        </p>
        <p key="p-10-111" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Final MST:
        </p>
        <div key="code-10-118" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A-B = 1
B-C = 2
C-D = 3`}</code>
          </pre>
        </div>
        <p key="p-10-119" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Total cost:
        </p>
        <p key="p-10-121" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 1+2+3=6 </span>
        </p>
        <h3 key="h3-10-123" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.3 Priority Queue for Prim's Algorithm
        </h3>
        <p key="p-10-125" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Like Dijkstra, Prim uses a PriorityQueue.
        </p>
        <p key="p-10-127" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          But the meaning is different.
        </p>
        <ul key="ul-10-131" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Dijkstra prioritizes the total distance from the source.</li>
          <li>Prim prioritizes the weight of the next edge connecting a new vertex.</li>
      </ul>
        <p key="p-10-132" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This difference is crucial.
        </p>
        <h3 key="h3-10-134" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.4 Java Implementation
        </h3>
        <div key="code-10-257" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class PrimMST {

    static class Edge {

        int to;
        long weight;

        Edge(int to, long weight) {
            this.to = to;
            this.weight = weight;
        }
    }

    static class Candidate {

        int from;
        int to;
        long weight;

        Candidate(int from, int to, long weight) {

            this.from = from;
            this.to = to;
            this.weight = weight;
        }
    }

    static class MSTResult {

        long totalWeight;
        List<Candidate> edges;
        boolean connected;

        MSTResult(
                long totalWeight,
                List<Candidate> edges,
                boolean connected) {

            this.totalWeight = totalWeight;
            this.edges = edges;
            this.connected = connected;
        }
    }

    public static MSTResult prim(
            List<List<Edge>> graph) {

        int n = graph.size();

        if (n == 0) {
            return new MSTResult(
                0,
                new ArrayList<>(),
                true
            );
        }

        boolean[] visited = new boolean[n];

        PriorityQueue<Candidate> pq =
            new PriorityQueue<>(
                Comparator.comparingLong(e -> e.weight)
            );

        List<Candidate> mstEdges = new ArrayList<>();

        long totalWeight = 0;

        visited[0] = true;

        for (Edge edge : graph.get(0)) {

            pq.offer(
                new Candidate(0, edge.to, edge.weight)
            );
        }

        while (!pq.isEmpty() && mstEdges.size() < n - 1) {

            Candidate current = pq.poll();

            int v = current.to;

            if (visited[v]) {
                continue;
            }

            visited[v] = true;

            mstEdges.add(current);

            totalWeight += current.weight;

            for (Edge edge : graph.get(v)) {

                if (!visited[edge.to]) {

                    pq.offer(
                        new Candidate(
                            v,
                            edge.to,
                            edge.weight
                        )
                    );
                }
            }
        }

        boolean connected = mstEdges.size() == n - 1;

        return new MSTResult(
            totalWeight,
            mstEdges,
            connected
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-10-258" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an undirected graph, each edge must be present in both adjacency lists.
        </p>
        <p key="p-10-260" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The returned <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">connected</code> field tells you whether the graph has a spanning tree.
        </p>
        <h3 key="h3-10-262" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.5 Complexity
        </h3>
        <p key="p-10-264" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Using an adjacency list and binary heap:
        </p>
        <ul key="ul-10-268" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Time: <span className="font-mono text-orange-300 font-semibold">O((V+E)\log V)</span>, commonly simplified to <span className="font-mono text-orange-300 font-semibold">O(E\log V)</span> for a connected graph.</li>
          <li>Space: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>.</li>
      </ul>
        <h3 key="h3-10-269" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.6 When to Use Prim
        </h3>
        <ul key="ul-10-275" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Building minimum-cost networks.</li>
          <li>Dense or moderately dense graphs.</li>
          <li>Problems naturally represented through adjacency lists.</li>
          <li>When growing an MST from one starting vertex is convenient.</li>
      </ul>
      </div>
    )
  },
  {
    id: 11,
    title: "11. Kruskal's Algorithm",
    summary: "Global edge-sorting greedy strategy, cycle avoidance via Disjoint Set Union (DSU) in O(E log E).",
    content: (
      <div className="space-y-4">
        <p key="p-11-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Kruskal's algorithm is another greedy algorithm for finding an MST.
        </p>
        <p key="p-11-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Unlike Prim, which grows one connected tree, Kruskal selects edges globally in increasing order of weight.
        </p>
        <p key="p-11-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Sorting + DSU
        </p>
        <h3 key="h3-11-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.1 Core Idea
        </h3>
        <ol key="ol-11-17" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Sort all edges by ascending weight.</li>
          <li>Start with every vertex in its own component.</li>
          <li>Examine the smallest remaining edge.</li>
          <li>If it connects two different components, select it.</li>
          <li>Merge those components.</li>
          <li>If it connects vertices already in the same component, skip it because it would create a cycle.</li>
          <li>Stop after selecting <span className="font-mono text-orange-300 font-semibold">V-1</span> edges.</li>
      </ol>
        <p key="p-11-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The main challenge is efficiently checking whether two vertices are already connected.
        </p>
        <p key="p-11-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is solved using Disjoint Set Union.
        </p>
        <h3 key="h3-11-22" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.2 Worked Example
        </h3>
        <p key="p-11-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="table-11-33" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Edge</th>
                <th className="p-3 font-semibold">Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">A — B</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">A — C</td>
                  <td className="p-3">4</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">B — C</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">B — D</td>
                  <td className="p-3">5</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">C — D</td>
                  <td className="p-3">3</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-11-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Sort:
        </p>
        <div key="code-11-43" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A-B = 1
B-C = 2
C-D = 3
A-C = 4
B-D = 5`}</code>
          </pre>
        </div>
        <p key="p-11-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">A-B = 1</code>.
        </p>
        <p key="p-11-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Current components:
        </p>
        <div key="code-11-53" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`{A, B}
{C}
{D}`}</code>
          </pre>
        </div>
        <p key="p-11-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">B-C = 2</code>.
        </p>
        <div key="code-11-60" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`{A, B, C}
{D}`}</code>
          </pre>
        </div>
        <p key="p-11-61" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">C-D = 3</code>.
        </p>
        <div key="code-11-66" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`{A, B, C, D}`}</code>
          </pre>
        </div>
        <p key="p-11-67" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We have selected <span className="font-mono text-orange-300 font-semibold">V-1=3</span> edges.
        </p>
        <p key="p-11-69" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Stop.
        </p>
        <p key="p-11-71" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Final MST weight:
        </p>
        <p key="p-11-73" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 1+2+3=6 </span>
        </p>
        <h3 key="h3-11-75" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.3 Why Do We Need DSU?
        </h3>
        <p key="p-11-77" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose an edge connects A and C.
        </p>
        <p key="p-11-79" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If A and C are already in the same component, selecting that edge creates a cycle.
        </p>
        <p key="p-11-81" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We need an efficient way to answer:
        </p>
        <blockquote key="bq-11-83" className="my-3 pl-4 border-l-2 border-orange-500 text-xs md:text-sm text-orange-300/90 italic bg-orange-500/5 py-2 rounded-r-lg">
          Are these two vertices already connected?
        </blockquote>
        <p key="p-11-85" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          DSU answers this using two operations:
        </p>
        <ul key="ul-11-89" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">find(x)</code>: Find the representative of x's component.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">union(a, b)</code>: Merge the components containing a and b.</li>
      </ul>
        <p key="p-11-90" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A cycle is formed if:
        </p>
        <div key="code-11-95" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`find(a) == find(b)`}</code>
          </pre>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "12. Disjoint Set Union (DSU)",
    summary: "Union-Find data structure, parent arrays, path compression, and union by size in amortized O(α(V)).",
    content: (
      <div className="space-y-4">
        <p key="p-12-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Disjoint Set Union is a data structure that maintains a collection of non-overlapping sets.
        </p>
        <p key="p-12-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It is also called:
        </p>
        <ul key="ul-12-8" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Union-Find.</li>
          <li>Disjoint Set Data Structure.</li>
      </ul>
        <p key="p-12-9" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It is particularly important for Kruskal's algorithm and dynamic connectivity problems.
        </p>
        <h3 key="h3-12-11" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.1 Basic Example
        </h3>
        <p key="p-12-13" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initially, every vertex belongs to its own set.
        </p>
        <div key="code-12-18" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`{0} {1} {2} {3} {4}`}</code>
          </pre>
        </div>
        <p key="p-12-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Perform:
        </p>
        <div key="code-12-25" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`union(0, 1)
union(1, 2)`}</code>
          </pre>
        </div>
        <p key="p-12-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now:
        </p>
        <div key="code-12-31" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`{0, 1, 2} {3} {4}`}</code>
          </pre>
        </div>
        <p key="p-12-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Perform:
        </p>
        <div key="code-12-37" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`union(3, 4)`}</code>
          </pre>
        </div>
        <p key="p-12-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now:
        </p>
        <div key="code-12-43" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`{0, 1, 2} {3, 4}`}</code>
          </pre>
        </div>
        <p key="p-12-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We have two connected components.
        </p>
        <h3 key="h3-12-46" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.2 Parent Array
        </h3>
        <p key="p-12-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          DSU uses a parent array.
        </p>
        <p key="p-12-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initially:
        </p>
        <div key="code-12-55" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`parent[i] = i;`}</code>
          </pre>
        </div>
        <p key="p-12-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Every vertex is its own parent.
        </p>
        <p key="p-12-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-12-63" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`parent = [0, 1, 2, 3, 4]`}</code>
          </pre>
        </div>
        <p key="p-12-64" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          After joining 0 and 1, one possible structure is:
        </p>
        <div key="code-12-71" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`    0
    |
    1`}</code>
          </pre>
        </div>
        <p key="p-12-72" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The representative is 0.
        </p>
        <h3 key="h3-12-74" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.3 Find Operation
        </h3>
        <p key="p-12-76" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The find operation identifies the representative of a set.
        </p>
        <p key="p-12-78" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Basic implementation:
        </p>
        <div key="code-12-90" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int find(int x) {

    if (parent[x] == x) {
        return x;
    }

    return find(parent[x]);
}`}</code>
          </pre>
        </div>
        <p key="p-12-91" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This can become inefficient when the tree is very deep.
        </p>
        <p key="p-12-93" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          To improve it, use path compression.
        </p>
        <h3 key="h3-12-95" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.4 Path Compression
        </h3>
        <p key="p-12-97" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Path compression makes nodes point directly to the representative during the find operation.
        </p>
        <div key="code-12-110" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int find(int x) {

    if (parent[x] != x) {

        parent[x] = find(parent[x]);
    }

    return parent[x];
}`}</code>
          </pre>
        </div>
        <p key="p-12-111" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For future queries, the path becomes much shorter.
        </p>
        <h3 key="h3-12-113" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.5 Union by Size
        </h3>
        <p key="p-12-115" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Another optimization is union by size.
        </p>
        <p key="p-12-117" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          When merging two sets, attach the smaller set below the larger set.
        </p>
        <p key="p-12-119" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This prevents unnecessarily tall trees.
        </p>
        <h4 key="h4-12-121" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Complete Java DSU Implementation
        </h4>
        <div key="code-12-186" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class DSU {

    int[] parent;
    int[] size;

    int components;

    public DSU(int n) {

        parent = new int[n];
        size = new int[n];

        components = n;

        for (int i = 0; i < n; i++) {

            parent[i] = i;
            size[i] = 1;
        }
    }

    public int find(int x) {

        if (parent[x] != x) {

            parent[x] = find(parent[x]);
        }

        return parent[x];
    }

    public boolean union(int a, int b) {

        int rootA = find(a);
        int rootB = find(b);

        if (rootA == rootB) {
            return false;
        }

        // Attach smaller component to larger component.
        if (size[rootA] < size[rootB]) {

            int temp = rootA;
            rootA = rootB;
            rootB = temp;
        }

        parent[rootB] = rootA;

        size[rootA] += size[rootB];

        components--;

        return true;
    }

    public int getComponents() {
        return components;
    }
}`}</code>
          </pre>
        </div>
        <h3 key="h3-12-187" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.6 DSU Complexity
        </h3>
        <p key="p-12-189" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          With path compression and union by size or rank:
        </p>
        <ul key="ul-12-194" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Find: <span className="font-mono text-orange-300 font-semibold">O(\alpha(V))</span> amortized.</li>
          <li>Union: <span className="font-mono text-orange-300 font-semibold">O(\alpha(V))</span> amortized.</li>
          <li>Initialization: <span className="font-mono text-orange-300 font-semibold">O(V)</span>.</li>
      </ul>
        <p key="p-12-195" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Here, <span className="font-mono text-orange-300 font-semibold">\alpha(V)</span> is the inverse Ackermann function.
        </p>
        <p key="p-12-197" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It grows so slowly that for practical input sizes it is effectively constant.
        </p>
      </div>
    )
  },
  {
    id: 13,
    title: "13. Kruskal's Algorithm — Complete Java Implementation",
    summary: "Full Java implementation of Kruskal's MST algorithm with internal DSU, edge comparator, and connectivity check.",
    content: (
      <div className="space-y-4">
        <p key="p-13-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Now that DSU is understood, we can implement Kruskal.
        </p>
        <div key="code-13-134" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class KruskalMST {

    static class Edge {

        int from;
        int to;
        long weight;

        Edge(int from, int to, long weight) {

            this.from = from;
            this.to = to;
            this.weight = weight;
        }
    }

    static class DSU {

        int[] parent;
        int[] size;

        DSU(int n) {

            parent = new int[n];
            size = new int[n];

            for (int i = 0; i < n; i++) {

                parent[i] = i;
                size[i] = 1;
            }
        }

        int find(int x) {

            if (parent[x] != x) {

                parent[x] = find(parent[x]);
            }

            return parent[x];
        }

        boolean union(int a, int b) {

            int rootA = find(a);
            int rootB = find(b);

            if (rootA == rootB) {
                return false;
            }

            if (size[rootA] < size[rootB]) {

                int temp = rootA;
                rootA = rootB;
                rootB = temp;
            }

            parent[rootB] = rootA;

            size[rootA] += size[rootB];

            return true;
        }
    }

    public static long kruskal(
            int vertices,
            List<Edge> edges) {

        if (vertices == 0) {
            return 0;
        }

        edges.sort(
            Comparator.comparingLong(e -> e.weight)
        );

        DSU dsu = new DSU(vertices);

        long totalWeight = 0;

        int selectedEdges = 0;

        for (Edge edge : edges) {

            if (dsu.union(edge.from, edge.to)) {

                totalWeight += edge.weight;

                selectedEdges++;

                if (selectedEdges == vertices - 1) {
                    break;
                }
            }
        }

        if (selectedEdges != vertices - 1) {

            throw new IllegalArgumentException(
                "Graph is disconnected; MST does not exist"
            );
        }

        return totalWeight;
    }

    public static void main(String[] args) {

        int vertices = 4;

        List<Edge> edges = new ArrayList<>();

        edges.add(new Edge(0, 1, 1));
        edges.add(new Edge(0, 2, 4));
        edges.add(new Edge(1, 2, 2));
        edges.add(new Edge(1, 3, 5));
        edges.add(new Edge(2, 3, 3));

        System.out.println(
            kruskal(vertices, edges)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-13-135" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Output:</strong>
        </p>
        <div key="code-13-140" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`6`}</code>
          </pre>
        </div>
        <h3 key="h3-13-141" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.1 Complexity
        </h3>
        <div key="table-13-149" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Operation</th>
                <th className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Sorting edges</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(E\log E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">DSU operations</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(E\alpha(V))</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Total</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(E\log E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Auxiliary space</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V)</span>, excluding the edge list</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-13-150" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.2 When to Use Kruskal
        </h3>
        <ul key="ul-13-157" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>You are given an edge list.</li>
          <li>The graph is sparse.</li>
          <li>Edges need to be processed in increasing order.</li>
          <li>You need to detect whether an edge creates a cycle.</li>
          <li>DSU can be used to solve connectivity efficiently.</li>
      </ul>
        <p key="p-13-158" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 4 — Graph Connectivity and Advanced Shortest Paths</strong>
        </p>
      </div>
    )
  },
  {
    id: 14,
    title: "14. DSU-Based Graph Optimization",
    summary: "Dynamic connectivity queries, cycle detection in undirected graphs, and component counting.",
    content: (
      <div className="space-y-4">
        <p key="p-14-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          DSU is much more than a component of Kruskal's algorithm.
        </p>
        <p key="p-14-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It is a general-purpose tool for connectivity problems.
        </p>
        <p key="p-14-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It can answer questions such as:
        </p>
        <ul key="ul-14-13" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Are two vertices connected?</li>
          <li>How many connected components exist?</li>
          <li>Does adding an edge create a cycle?</li>
          <li>How many edges are needed to connect a network?</li>
          <li>Can several groups be merged efficiently?</li>
      </ul>
        <h3 key="h3-14-14" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.1 Checking Whether Two Vertices Are Connected
        </h3>
        <div key="code-14-26" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`DSU dsu = new DSU(5);

dsu.union(0, 1);
dsu.union(1, 2);

System.out.println(
    dsu.find(0) == dsu.find(2)
);`}</code>
          </pre>
        </div>
        <p key="p-14-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-14-32" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <p key="p-14-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Vertices 0 and 2 belong to the same component.
        </p>
        <h3 key="h3-14-35" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.2 Detecting Cycles in an Undirected Graph
        </h3>
        <p key="p-14-37" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For an undirected graph:
        </p>
        <ol key="ol-14-43" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Initialize a DSU.</li>
          <li>Process each edge.</li>
          <li>If its endpoints have the same representative, the edge creates a cycle.</li>
          <li>Otherwise, union the two endpoints.</li>
      </ol>
        <div key="code-14-57" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`for (Edge edge : edges) {

    if (dsu.find(edge.from) == dsu.find(edge.to)) {

        System.out.println("Cycle detected");

    } else {

        dsu.union(edge.from, edge.to);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is useful for undirected graphs. For directed graphs, ordinary DSU does not detect directed cycles.
        </p>
      </div>
    )
  },
  {
    id: 15,
    title: "15. Network Connectivity",
    summary: "Connecting disjoint computer networks, redundant cable reallocation, and minimum C-1 operations.",
    content: (
      <div className="space-y-4">
        <p key="p-15-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider a computer network:
        </p>
        <div key="code-15-11" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Computer 0 ----- Computer 1

Computer 2 ----- Computer 3

Computer 4`}</code>
          </pre>
        </div>
        <p key="p-15-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are three disconnected components.
        </p>
        <p key="p-15-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose we want to make the entire network connected using additional connections.
        </p>
        <p key="p-15-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          To connect <span className="font-mono text-orange-300 font-semibold">C</span> components, we need at least:
        </p>
        <p key="p-15-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> C-1 </span>
        </p>
        <p key="p-15-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          additional connections, provided we have enough reusable or redundant cables.
        </p>
        <h3 key="h3-15-22" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.1 Minimum Connections Needed
        </h3>
        <p key="p-15-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose there are:
        </p>
        <div key="code-15-29" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`n = 6 computers`}</code>
          </pre>
        </div>
        <p key="p-15-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Initially:
        </p>
        <div key="code-15-39" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 — 1

2 — 3

4 — 5`}</code>
          </pre>
        </div>
        <p key="p-15-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          There are three connected components.
        </p>
        <p key="p-15-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The minimum number of new connections is:
        </p>
        <p key="p-15-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 3-1=2 </span>
        </p>
        <h3 key="h3-15-46" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.2 Important Condition
        </h3>
        <p key="p-15-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A connected graph with <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">n</code> vertices requires at least <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">n - 1</code> edges.
        </p>
        <p key="p-15-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If the number of available edges is smaller than <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">n - 1</code>, it is impossible to connect the entire network without adding new edges.
        </p>
        <p key="p-15-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          With redundant edges available, the answer is:
        </p>
        <p key="p-15-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> operations=components-1 </span>
        </p>
        <h3 key="h3-15-56" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.3 Java Implementation
        </h3>
        <div key="code-15-77" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public static int minOperations(
        int n,
        int[][] connections) {

    if (connections.length < n - 1) {
        return -1;
    }

    DSU dsu = new DSU(n);

    for (int[] edge : connections) {

        dsu.union(edge[0], edge[1]);
    }

    return dsu.getComponents() - 1;
}`}</code>
          </pre>
        </div>
        <p key="p-15-78" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Example:
        </p>
        <div key="code-15-93" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[][] connections = {
    {0, 1},
    {0, 2},
    {1, 2},
    {3, 4},
    {4, 5}
};

System.out.println(
    minOperations(6, connections)
);`}</code>
          </pre>
        </div>
        <p key="p-15-94" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Output:
        </p>
        <div key="code-15-99" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1`}</code>
          </pre>
        </div>
        <p key="p-15-100" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          All six computers can be connected by taking one redundant connection from the first component and using it to connect to the second component.
        </p>
        <p key="p-15-102" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Complexity:</strong>
        </p>
        <ul key="ul-15-106" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Time: <span className="font-mono text-orange-300 font-semibold">O(E\alpha(V))</span>.</li>
          <li>Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(V)</span>.</li>
      </ul>
      </div>
    )
  },
  {
    id: 16,
    title: "16. Grid-Based Graph Problems",
    summary: "Implicit grid graphs, direction vectors (dr, dc), 4-directional and 8-directional BFS pathfinding.",
    content: (
      <div className="space-y-4">
        <p key="p-16-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A grid can be interpreted as a graph.
        </p>
        <p key="p-16-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Every cell is a vertex.
        </p>
        <p key="p-16-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The edges represent valid movements between neighboring cells.
        </p>
        <p key="p-16-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <div key="code-16-15" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`S . . .
# # . #
. . . E`}</code>
          </pre>
        </div>
        <p key="p-16-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Where:
        </p>
        <ul key="ul-16-22" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">S</code> = starting point.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">E</code> = destination.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">.</code> = open cell.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">#</code> = blocked cell.</li>
      </ul>
        <p key="p-16-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Possible movements:
        </p>
        <ul key="ul-16-29" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Up.</li>
          <li>Down.</li>
          <li>Left.</li>
          <li>Right.</li>
      </ul>
        <p key="p-16-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Instead of explicitly building an adjacency list, we calculate neighbors dynamically.
        </p>
        <p key="p-16-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is called an implicit graph representation.
        </p>
        <h3 key="h3-16-34" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.1 Grid as a Graph
        </h3>
        <p key="p-16-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Suppose a cell is at:
        </p>
        <div key="code-16-41" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`(row, column)`}</code>
          </pre>
        </div>
        <p key="p-16-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Its four possible neighbors are:
        </p>
        <div key="code-16-50" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`(row - 1, column)
(row + 1, column)
(row, column - 1)
(row, column + 1)`}</code>
          </pre>
        </div>
        <p key="p-16-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We use direction arrays:
        </p>
        <div key="code-16-57" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] dr = {-1, 1, 0, 0};
int[] dc = {0, 0, -1, 1};`}</code>
          </pre>
        </div>
        <p key="p-16-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For diagonals, we would use eight movement directions instead.
        </p>
        <h3 key="h3-16-60" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.2 Shortest Path in a Grid Using BFS
        </h3>
        <p key="p-16-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Assume:
        </p>
        <ul key="ul-16-67" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">0</code> = open cell.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">1</code> = blocked cell.</li>
          <li>Every movement has cost 1.</li>
      </ul>
        <p key="p-16-68" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We need to find the minimum number of moves from the top-left corner to the bottom-right corner.
        </p>
        <h4 key="h4-16-70" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java implementation
        </h4>
        <div key="code-16-141" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class GridShortestPath {

    public static int shortestPath(int[][] grid) {

        int rows = grid.length;
        int cols = grid[0].length;

        if (grid[0][0] == 1
                || grid[rows - 1][cols - 1] == 1) {

            return -1;
        }

        int[][] dist = new int[rows][cols];

        for (int[] row : dist) {
            Arrays.fill(row, -1);
        }

        int[] dr = {-1, 1, 0, 0};
        int[] dc = {0, 0, -1, 1};

        Queue<int[]> queue = new ArrayDeque<>();

        queue.offer(new int[] {0, 0});

        dist[0][0] = 0;

        while (!queue.isEmpty()) {

            int[] current = queue.poll();

            int r = current[0];
            int c = current[1];

            if (r == rows - 1 && c == cols - 1) {
                return dist[r][c];
            }

            for (int d = 0; d < 4; d++) {

                int nr = r + dr[d];
                int nc = c + dc[d];

                if (nr < 0 || nr >= rows
                        || nc < 0 || nc >= cols) {
                    continue;
                }

                if (grid[nr][nc] == 1) {
                    continue;
                }

                if (dist[nr][nc] == -1) {

                    dist[nr][nc] = dist[r][c] + 1;

                    queue.offer(new int[] {nr, nc});
                }
            }
        }

        return -1;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-16-142" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Complexity:</strong>
        </p>
        <ul key="ul-16-146" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Time: <span className="font-mono text-orange-300 font-semibold">O(RC)</span>.</li>
          <li>Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(RC)</span>.</li>
      </ul>
        <p key="p-16-147" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Every cell is visited at most once.
        </p>
        <h3 key="h3-16-149" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.3 Where Grid Graphs Are Used
        </h3>
        <ul key="ul-16-159" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Maze-solving problems.</li>
          <li>Robotics navigation.</li>
          <li>Game pathfinding.</li>
          <li>Image processing.</li>
          <li>Flood fill.</li>
          <li>Island counting.</li>
          <li>Shortest route through obstacles.</li>
          <li>Matrix-based competitive programming.</li>
      </ul>
      </div>
    )
  },
  {
    id: 17,
    title: "17. Multi-Source BFS",
    summary: "Simultaneous queue initialization for multiple sources, distance to nearest facility, Rotting Oranges, and 01 Matrix.",
    content: (
      <div className="space-y-4">
        <p key="p-17-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Normal BFS starts from one source.
        </p>
        <p key="p-17-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Multi-source BFS starts simultaneously from several source vertices.
        </p>
        <p key="p-17-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This is useful when we want to find the minimum distance to the nearest source.
        </p>
        <h3 key="h3-17-8" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.1 Example
        </h3>
        <p key="p-17-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider:
        </p>
        <div key="code-17-18" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 0 1 0 0
0 0 0 0 0
1 0 0 0 1
0 0 0 0 0`}</code>
          </pre>
        </div>
        <p key="p-17-19" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Assume every cell containing <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">1</code> is a source.
        </p>
        <p key="p-17-21" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          We want the distance of every other cell to the nearest source.
        </p>
        <p key="p-17-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Instead of running BFS separately from every source, we insert all source cells into the queue initially.
        </p>
        <p key="p-17-25" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          They all begin with distance zero.
        </p>
        <p key="p-17-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Then BFS expands outward from all sources together.
        </p>
        <h3 key="h3-17-29" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.2 Algorithm
        </h3>
        <ol key="ol-17-36" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Initialize the distance array with <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">-1</code>.</li>
          <li>Insert every source into the queue.</li>
          <li>Assign distance zero to each source.</li>
          <li>Process neighbors normally using BFS.</li>
          <li>First discovery of any cell gives its nearest-source distance.</li>
      </ol>
        <h3 key="h3-17-37" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.3 Java Implementation
        </h3>
        <div key="code-17-104" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class MultiSourceBFS {

    public static int[][] calculateDistances(int[][] grid) {

        int rows = grid.length;
        int cols = grid[0].length;

        int[][] dist = new int[rows][cols];

        for (int[] row : dist) {
            Arrays.fill(row, -1);
        }

        Queue<int[]> queue = new ArrayDeque<>();

        // Add every source.
        for (int r = 0; r < rows; r++) {

            for (int c = 0; c < cols; c++) {

                if (grid[r][c] == 1) {

                    dist[r][c] = 0;

                    queue.offer(new int[] {r, c});
                }
            }
        }

        int[] dr = {-1, 1, 0, 0};
        int[] dc = {0, 0, -1, 1};

        while (!queue.isEmpty()) {

            int[] current = queue.poll();

            int r = current[0];
            int c = current[1];

            for (int d = 0; d < 4; d++) {

                int nr = r + dr[d];
                int nc = c + dc[d];

                if (nr < 0 || nr >= rows
                        || nc < 0 || nc >= cols) {
                    continue;
                }

                if (dist[nr][nc] == -1) {

                    dist[nr][nc] = dist[r][c] + 1;

                    queue.offer(new int[] {nr, nc});
                }
            }
        }

        return dist;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-17-105" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Here, all cells are allowed for movement. If the grid contains blocked cells, add the corresponding validity condition.
        </p>
        <h3 key="h3-17-107" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.4 Complexity
        </h3>
        <ul key="ul-17-111" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Time: <span className="font-mono text-orange-300 font-semibold">O(RC)</span>.</li>
          <li>Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(RC)</span>.</li>
      </ul>
        <p key="p-17-112" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Running BFS independently from every source could take much longer.
        </p>
        <p key="p-17-114" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Multi-source BFS solves the problem with a single traversal.
        </p>
        <h3 key="h3-17-116" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.5 Important Applications
        </h3>
        <ul key="ul-17-124" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Rotting Oranges.</li>
          <li>Nearest Zero.</li>
          <li>Distance to the Nearest Exit.</li>
          <li>Fire spreading in a grid.</li>
          <li>Infection propagation models.</li>
          <li>Minimum distance to any of several facilities.</li>
      </ul>
      </div>
    )
  },
  {
    id: 18,
    title: "18. 0-1 BFS",
    summary: "Shortest paths with edge weights {0, 1} using ArrayDeque (offerFirst for 0, offerLast for 1) in linear O(V + E).",
    content: (
      <div className="space-y-4">
        <p key="p-18-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          0-1 BFS is a specialized shortest-path algorithm.
        </p>
        <p key="p-18-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It works when edge weights are restricted to:
        </p>
        <p key="p-18-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> w\in\&#123;0,1\&#125; </span>
        </p>
        <p key="p-18-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          That means every edge has a cost of either zero or one.
        </p>
        <p key="p-18-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Only 0 and 1 edge weights
        </p>
        <h3 key="h3-18-12" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.1 Why Do We Need 0-1 BFS?
        </h3>
        <p key="p-18-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Consider a graph where some transitions are free and others cost one.
        </p>
        <div key="code-18-22" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B = 0
A → C = 1
B → C = 0
C → D = 1`}</code>
          </pre>
        </div>
        <p key="p-18-23" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Normal BFS treats every edge as having equal cost.
        </p>
        <p key="p-18-25" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra can solve this problem, but it requires a priority queue and is more expensive.
        </p>
        <p key="p-18-27" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          0-1 BFS uses a Deque to achieve linear time.
        </p>
        <h3 key="h3-18-29" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.2 Core Idea
        </h3>
        <p key="p-18-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A Deque supports insertion at both ends.
        </p>
        <p key="p-18-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          In Java:
        </p>
        <div key="code-18-38" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Deque<Integer> deque = new ArrayDeque<>();`}</code>
          </pre>
        </div>
        <p key="p-18-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The algorithm works as follows:
        </p>
        <ul key="ul-18-43" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>If an edge has weight 0, insert the destination at the front.</li>
          <li>If an edge has weight 1, insert it at the back.</li>
      </ul>
        <p key="p-18-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-18-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A zero-cost transition does not increase the current distance, so it should be explored before a transition that increases the distance by one.
        </p>
        <p key="p-18-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A one-cost transition belongs behind the existing zero-cost alternatives.
        </p>
        <h3 key="h3-18-50" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.3 Java Implementation
        </h3>
        <div key="code-18-145" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class ZeroOneBFS {

    static class Edge {

        int to;
        int weight;

        Edge(int to, int weight) {

            this.to = to;
            this.weight = weight;
        }
    }

    static class State {

        int node;
        long distance;

        State(int node, long distance) {

            this.node = node;
            this.distance = distance;
        }
    }

    static final long INF = Long.MAX_VALUE / 4;

    public static long[] shortestPath(
            List<List<Edge>> graph,
            int source) {

        int n = graph.size();

        long[] dist = new long[n];

        Arrays.fill(dist, INF);

        Deque<State> deque = new ArrayDeque<>();

        dist[source] = 0;

        deque.offerFirst(new State(source, 0));

        while (!deque.isEmpty()) {

            State current = deque.pollFirst();

            int u = current.node;

            if (current.distance != dist[u]) {
                continue;
            }

            for (Edge edge : graph.get(u)) {

                int v = edge.to;

                if (edge.weight != 0 && edge.weight != 1) {

                    throw new IllegalArgumentException(
                        "Edge weight must be 0 or 1"
                    );
                }

                long newDistance =
                    dist[u] + edge.weight;

                if (newDistance < dist[v]) {

                    dist[v] = newDistance;

                    State next = new State(v, newDistance);

                    if (edge.weight == 0) {

                        deque.offerFirst(next);

                    } else {

                        deque.offerLast(next);
                    }
                }
            }
        }

        return dist;
    }
}`}</code>
          </pre>
        </div>
        <h3 key="h3-18-146" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.4 Complexity
        </h3>
        <ul key="ul-18-150" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Time: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>.</li>
          <li>Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(V)</span>, excluding graph storage.</li>
      </ul>
        <h3 key="h3-18-151" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.5 When to Use 0-1 BFS
        </h3>
        <ul key="ul-18-157" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Graph edges with only zero and one weights.</li>
          <li>Minimum-cost transitions with free and paid operations.</li>
          <li>Problems involving direction changes, where some moves are free and others cost one.</li>
          <li>Grid problems with special movement costs.</li>
      </ul>
        <p key="p-18-158" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Important:</strong> If edge weights can be 2, 3, 5, or other values, ordinary 0-1 BFS does not apply. Use Dijkstra or another suitable algorithm.
        </p>
        <p key="p-18-160" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 5 — Comparing Algorithms</strong>
        </p>
      </div>
    )
  },
  {
    id: 19,
    title: "19. Algorithm Comparison and Complexity",
    summary: "Comprehensive reference matrix of all 7 shortest-path and 2 MST algorithms with decision trees.",
    content: (
      <div className="space-y-4">
        <p key="p-19-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          One of the most important interview skills is knowing which graph algorithm to choose.
        </p>
        <p key="p-19-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Different algorithms solve different types of shortest-path and connectivity problems.
        </p>
        <h3 key="h3-19-6" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.1 Shortest Path Algorithm Comparison
        </h3>
        <div key="table-19-17" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Algorithm</th>
                <th className="p-3 font-semibold">Graph requirements</th>
                <th className="p-3 font-semibold">Problem solved</th>
                <th className="p-3 font-semibold">Time complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">BFS</td>
                  <td className="p-3">Unweighted / equal weights</td>
                  <td className="p-3">Single-source shortest paths</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V+E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Dijkstra</td>
                  <td className="p-3">Nonnegative weights</td>
                  <td className="p-3">Single-source shortest paths</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O((V+E)\log V)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Bellman-Ford</td>
                  <td className="p-3">Negative weights allowed</td>
                  <td className="p-3">Single-source + negative cycle detection</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(VE)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Floyd-Warshall</td>
                  <td className="p-3">Weighted graph</td>
                  <td className="p-3">All-pairs shortest paths</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V^3)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">DAG shortest path</td>
                  <td className="p-3">Directed acyclic graph</td>
                  <td className="p-3">Single-source shortest paths</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V+E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Multi-source BFS</td>
                  <td className="p-3">Unweighted graph</td>
                  <td className="p-3">Distance to nearest source</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V+E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">0-1 BFS</td>
                  <td className="p-3">Edge weights 0 or 1</td>
                  <td className="p-3">Single-source shortest paths</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(V+E)</span></td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-19-18" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.2 MST Algorithm Comparison
        </h3>
        <div key="table-19-28" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Property</th>
                <th className="p-3 font-semibold">Prim's</th>
                <th className="p-3 font-semibold">Kruskal's</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Strategy</td>
                  <td className="p-3">Grow one tree</td>
                  <td className="p-3">Select globally smallest edges</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Main data structure</td>
                  <td className="p-3">PriorityQueue</td>
                  <td className="p-3">Sorting + DSU</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Graph representation</td>
                  <td className="p-3">Adjacency list</td>
                  <td className="p-3">Edge list</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Cycle handling</td>
                  <td className="p-3">Skip visited vertices</td>
                  <td className="p-3">DSU detects same component</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Typical time</td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(E\log V)</span></td>
                  <td className="p-3"><span className="font-mono text-orange-300 font-semibold">O(E\log E)</span></td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Best suited for</td>
                  <td className="p-3">Adjacency-list graph traversal</td>
                  <td className="p-3">Edge-list processing</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-19-29" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Both algorithms find an MST when the input is a connected, undirected, weighted graph.
        </p>
        <h3 key="h3-19-31" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.3 Which Algorithm Should You Choose?
        </h3>
        <p key="p-19-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Shortest-path decision guide</strong>
        </p>
        <p key="p-19-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">What kind of graph are you given?</strong>
        </p>
        <p key="p-19-37" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Unweighted?</strong>
        </p>
        <p key="p-19-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS
        </p>
        <p key="p-19-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Minimum number of edges
        </p>
        <p key="p-19-43" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Weights 0 or 1?</strong>
        </p>
        <p key="p-19-45" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          0-1 BFS
        </p>
        <p key="p-19-47" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use a Deque
        </p>
        <p key="p-19-49" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Nonnegative weights?</strong>
        </p>
        <p key="p-19-51" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra
        </p>
        <p key="p-19-53" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use a PriorityQueue
        </p>
        <p key="p-19-55" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Negative edges?</strong>
        </p>
        <p key="p-19-57" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Bellman-Ford
        </p>
        <p key="p-19-59" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Detect reachable negative cycles
        </p>
        <p key="p-19-61" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">DAG?</strong>
        </p>
        <p key="p-19-63" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Topological DP
        </p>
        <p key="p-19-65" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Can handle negative edges
        </p>
        <p key="p-19-67" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">All pairs?</strong>
        </p>
        <p key="p-19-69" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Floyd-Warshall
        </p>
        <p key="p-19-71" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          All-pairs distances
        </p>
        <p key="p-19-73" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Minimum spanning tree decision guide</strong>
        </p>
        <p key="p-19-75" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If the problem asks for the minimum cost to connect every vertex in an undirected weighted graph:
        </p>
        <ul key="ul-19-79" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li><strong className="font-bold text-stone-900">Prim:</strong> Grow a tree using the minimum available connecting edge.</li>
          <li><strong className="font-bold text-stone-900">Kruskal:</strong> Sort edges and use DSU to avoid cycles.</li>
      </ul>
        <p key="p-19-80" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 6 — Advanced Concepts and Interview Insights</strong>
        </p>
      </div>
    )
  },
  {
    id: 20,
    title: "20. Important Graph Optimization Concepts",
    summary: "Greedy properties, Edge Relaxation, Cut Property, Cycle Property, Minimum Spanning Forests, and MST uniqueness.",
    content: (
      <div className="space-y-4">
        <p key="p-20-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These concepts help you understand why the algorithms work, rather than simply memorizing their implementations.
        </p>
        <h3 key="h3-20-4" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.1 Greedy Algorithms in Graphs
        </h3>
        <p key="p-20-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra and Prim are both greedy algorithms.
        </p>
        <p key="p-20-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          However, their greedy choices are different.
        </p>
        <p key="p-20-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Dijkstra:</strong>
        </p>
        <p key="p-20-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose the unprocessed vertex with the smallest known source distance.
        </p>
        <p key="p-20-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Prim:</strong>
        </p>
        <p key="p-20-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose the smallest edge connecting the current tree to an outside vertex.
        </p>
        <p key="p-20-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Kruskal:</strong>
        </p>
        <p key="p-20-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Choose the globally smallest edge that does not create a cycle.
        </p>
        <p key="p-20-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The correctness of these algorithms depends on their specific greedy properties.
        </p>
        <h3 key="h3-20-24" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.2 Edge Relaxation
        </h3>
        <p key="p-20-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Relaxation is used in:
        </p>
        <ul key="ul-20-33" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>Dijkstra.</li>
          <li>Bellman-Ford.</li>
          <li>Floyd-Warshall.</li>
          <li>DAG shortest paths.</li>
          <li>0-1 BFS.</li>
      </ul>
        <p key="p-20-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The basic operation is:
        </p>
        <p key="p-20-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dist[v]=\min(dist[v],dist[u]+w) </span>
        </p>
        <p key="p-20-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understanding this operation is essential for shortest-path problems.
        </p>
        <h3 key="h3-20-40" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.3 Cut Property of MST
        </h3>
        <p key="p-20-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A cut divides a graph's vertices into two groups.
        </p>
        <p key="p-20-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The cut property states that a minimum-weight edge crossing a cut is safe to include in some MST.
        </p>
        <p key="p-20-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This helps explain why Prim and Kruskal work.
        </p>
        <p key="p-20-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Prim repeatedly chooses a minimum edge crossing the boundary between its current tree and the rest of the graph.
        </p>
        <p key="p-20-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Kruskal selects edges in increasing order while ensuring that the selected edges remain a forest.
        </p>
        <h3 key="h3-20-52" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.4 Cycle Property of MST
        </h3>
        <p key="p-20-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A useful MST property:
        </p>
        <p key="p-20-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If an edge is the unique heaviest edge in a cycle, it cannot belong to an MST.
        </p>
        <p key="p-20-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Why?
        </p>
        <p key="p-20-60" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The other edges of that cycle already provide an alternative connection. Removing the unique heaviest edge keeps the graph connected and reduces total cost.
        </p>
        <p key="p-20-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This property is useful in understanding why some edges can safely be excluded.
        </p>
        <h3 key="h3-20-64" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.5 Minimum Spanning Forest
        </h3>
        <p key="p-20-66" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          What happens when the graph is disconnected?
        </p>
        <p key="p-20-68" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A single MST does not exist.
        </p>
        <p key="p-20-70" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Instead, we calculate a minimum spanning forest: an MST for every connected component.
        </p>
        <p key="p-20-72" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Kruskal naturally handles this by processing edges without requiring that all vertices become connected.
        </p>
        <p key="p-20-74" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Prim can also be run separately on each unvisited component.
        </p>
        <h3 key="h3-20-76" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.6 Unique vs Multiple MSTs
        </h3>
        <p key="p-20-78" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An MST does not always have to be unique.
        </p>
        <p key="p-20-80" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If all edge weights are distinct, the MST is unique.
        </p>
        <p key="p-20-82" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          If equal-weight edges exist, multiple MSTs may have the same total weight.
        </p>
        <p key="p-20-84" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <div key="code-20-93" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A --1-- B
|       |
1       1
|       |
C-------`}</code>
          </pre>
        </div>
        <p key="p-20-94" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Several choices may produce the same minimum total weight.
        </p>
      </div>
    )
  },
  {
    id: 21,
    title: "21. Common Mistakes and Interview Traps",
    summary: "9 critical pitfalls: Dijkstra with negative edges, confusing MST with shortest path, stale PQ states, integer overflow.",
    content: (
      <div className="space-y-4">
        <h3 key="h3-21-2" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.1 Using Dijkstra with Negative Edges
        </h3>
        <p key="p-21-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Wrong approach:
        </p>
        <div key="code-21-9" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`// Blindly run Dijkstra even when edges are negative.`}</code>
          </pre>
        </div>
        <p key="p-21-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Dijkstra's correctness depends on nonnegative edge weights.
        </p>
        <p key="p-21-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Solution:</strong> Use Bellman-Ford or DAG shortest paths when appropriate.
        </p>
        <h3 key="h3-21-14" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.2 Confusing MST with Shortest Paths
        </h3>
        <p key="p-21-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          An MST does not guarantee the shortest route from every vertex to every other vertex.
        </p>
        <p key="p-21-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          It guarantees the minimum total weight of the selected connecting edges.
        </p>
        <p key="p-21-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Solution:</strong> Identify whether the question asks for the cost of connecting the entire network or the cost of travelling between vertices.
        </p>
        <h3 key="h3-21-22" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.3 Forgetting the V-1 Relaxation Rule
        </h3>
        <p key="p-21-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Bellman-Ford requires at most <span className="font-mono text-orange-300 font-semibold">V-1</span> full edge-relaxation rounds.
        </p>
        <p key="p-21-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The additional pass is for negative-cycle detection.
        </p>
        <h3 key="h3-21-28" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.4 Incorrect Priority Queue Updates
        </h3>
        <p key="p-21-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Java's PriorityQueue does not automatically update an existing entry when a distance changes.
        </p>
        <p key="p-21-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The common solution is to insert a new state and ignore old states when popped.
        </p>
        <div key="code-21-39" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`if (current.distance != dist[current.node]) {
    continue;
}`}</code>
          </pre>
        </div>
        <h3 key="h3-21-40" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.5 Not Detecting Disconnected Graphs in Prim
        </h3>
        <p key="p-21-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Prim may stop before all vertices are included if the graph is disconnected.
        </p>
        <p key="p-21-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Always verify:
        </p>
        <div key="code-21-49" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`selectedEdges == vertices - 1`}</code>
          </pre>
        </div>
        <p key="p-21-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          for a connected MST.
        </p>
        <h3 key="h3-21-52" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.6 Forgetting DSU Path Compression
        </h3>
        <p key="p-21-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A basic parent-tree implementation can become inefficient.
        </p>
        <p key="p-21-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use:
        </p>
        <div key="code-21-61" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`parent[x] = find(parent[x]);`}</code>
          </pre>
        </div>
        <p key="p-21-62" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          along with union by size or rank.
        </p>
        <h3 key="h3-21-64" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.7 Using BFS for Weighted Graphs
        </h3>
        <p key="p-21-66" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          BFS minimizes the number of edges, not necessarily total weight.
        </p>
        <p key="p-21-68" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use a weighted shortest-path algorithm instead.
        </p>
        <h3 key="h3-21-70" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.8 Using Integer Distances Carelessly
        </h3>
        <p key="p-21-72" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Large graph weights can cause integer overflow.
        </p>
        <p key="p-21-74" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Prefer:
        </p>
        <div key="code-21-79" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`long[] dist;`}</code>
          </pre>
        </div>
        <p key="p-21-80" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          and a sufficiently large infinity value:
        </p>
        <div key="code-21-85" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`static final long INF = Long.MAX_VALUE / 4;`}</code>
          </pre>
        </div>
        <p key="p-21-86" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Before adding distances in algorithms that use infinity, check that the value is not <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">INF</code>.
        </p>
        <h3 key="h3-21-88" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.9 Assuming Every Negative Cycle Affects Every Destination
        </h3>
        <p key="p-21-90" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A negative cycle only makes a destination's shortest path undefined when the cycle is reachable from the source and the destination can be reached from that cycle.
        </p>
        <p key="p-21-92" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          This distinction is especially important in Bellman-Ford interview questions.
        </p>
        <p key="p-21-94" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 7 — Practical Applications</strong>
        </p>
      </div>
    )
  },
  {
    id: 22,
    title: "22. Real-World Applications",
    summary: "GPS routing, telecommunication infrastructure, optical fiber layout, flight scheduling, robotics pathfinding.",
    content: (
      <div className="space-y-4">
        <div key="table-22-15" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Algorithm</th>
                <th className="p-3 font-semibold">Practical application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">BFS</td>
                  <td className="p-3">Minimum number of network hops</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Dijkstra</td>
                  <td className="p-3">Navigation and nonnegative travel costs</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Bellman-Ford</td>
                  <td className="p-3">Negative-cost routing and cycle analysis</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Floyd-Warshall</td>
                  <td className="p-3">All-pairs routing in small networks</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">DAG shortest paths</td>
                  <td className="p-3">Project scheduling and dependency optimization</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Prim</td>
                  <td className="p-3">Connecting infrastructure at minimum total cost</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Kruskal</td>
                  <td className="p-3">Minimum-cost network design</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">DSU</td>
                  <td className="p-3">Dynamic connectivity and component merging</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Multi-source BFS</td>
                  <td className="p-3">Nearest service centre or propagation</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">0-1 BFS</td>
                  <td className="p-3">Systems with free and one-cost transitions</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Grid BFS</td>
                  <td className="p-3">Robotics, navigation, and maze-solving</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h4 key="h4-22-16" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example: Transportation Network
        </h4>
        <p key="p-22-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Imagine a company wants to connect five cities.
        </p>
        <p key="p-22-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The road construction costs are:
        </p>
        <div key="code-22-30" className="my-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shadow-md">
          <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-stone-500 font-sans">Module 18 Shortest Paths & MST</span>
          </div>
          <pre className="p-4 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`City A to B = 10
City A to C = 20
City B to C = 5
City B to D = 15
City C to D = 8
City D to E = 12`}</code>
          </pre>
        </div>
        <p key="p-22-31" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The company asks two different questions:
        </p>
        <p key="p-22-33" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Question 1:</strong> Find the cheapest route from City A to City E.
        </p>
        <p key="p-22-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use a shortest-path algorithm such as Dijkstra, assuming nonnegative costs.
        </p>
        <p key="p-22-37" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Question 2:</strong> Find the cheapest collection of roads that connects every city.
        </p>
        <p key="p-22-39" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use Prim or Kruskal.
        </p>
        <p key="p-22-41" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The same graph supports two different optimization problems.
        </p>
        <p key="p-22-43" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">Part 8 — Interview Practice Problems</strong>
        </p>
      </div>
    )
  },
  {
    id: 23,
    title: "23. Level-Based Problem Set",
    summary: "35 curated problems across 4 levels: Shortest-Path Fundamentals, Advanced Shortest Paths, MST & DSU, Advanced FAANG.",
    content: (
      <div className="space-y-4">
        <p key="p-23-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These problems progress from implementation fundamentals to advanced graph interview challenges.
        </p>
        <h3 key="h3-23-4" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 1 — Graph Shortest-Path Fundamentals
        </h3>
        <ol key="ol-23-13" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Implement BFS traversal.</li>
          <li>Find the shortest path in an unweighted graph.</li>
          <li>Find the shortest path between two vertices.</li>
          <li>Print the actual path using parent tracking.</li>
          <li>Find minimum moves in a graph.</li>
          <li>Implement Dijkstra using an adjacency list.</li>
          <li>Find the distance to every vertex from a source.</li>
      </ol>
        <h3 key="h3-23-14" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 2 — Advanced Shortest Paths
        </h3>
        <ol key="ol-23-23" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Implement Bellman-Ford.</li>
          <li>Detect a negative-weight cycle.</li>
          <li>Implement Floyd-Warshall.</li>
          <li>Find all-pairs shortest paths.</li>
          <li>Reconstruct a shortest path using Floyd-Warshall.</li>
          <li>Find shortest paths in a DAG.</li>
          <li>Find shortest paths in a directed weighted graph.</li>
      </ol>
        <h3 key="h3-23-24" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 3 — Minimum Spanning Trees and DSU
        </h3>
        <ol key="ol-23-34" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Implement DSU with path compression.</li>
          <li>Implement union by size.</li>
          <li>Detect cycles in an undirected graph using DSU.</li>
          <li>Implement Prim's algorithm.</li>
          <li>Implement Kruskal's algorithm.</li>
          <li>Find the minimum cost to connect all points.</li>
          <li>Find the number of connected components.</li>
          <li>Find the minimum number of additional network connections.</li>
      </ol>
        <h3 key="h3-23-35" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 4 — Advanced Interview Problems
        </h3>
        <ol key="ol-23-50" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Shortest Path in a Binary Matrix.</li>
          <li>Network Delay Time.</li>
          <li>Cheapest Flights Within K Stops.</li>
          <li>Path With Minimum Effort.</li>
          <li>Minimum Cost to Make at Least One Valid Path in a Grid.</li>
          <li>Rotting Oranges.</li>
          <li>01 Matrix.</li>
          <li>Swim in Rising Water.</li>
          <li>Find the City With the Smallest Number of Neighbors at a Threshold Distance.</li>
          <li>Connecting Cities With Minimum Cost.</li>
          <li>Critical Connections in a Network.</li>
          <li>Minimum Operations to Connect a Network.</li>
          <li>Find the Shortest Path Visiting All Nodes.</li>
      </ol>
      </div>
    )
  },
  {
    id: 24,
    title: "24. High-Yield Interview Problems",
    summary: "Key problem taxonomy: Network Delay Time, Cheapest Flights, Path With Minimum Effort, Swim in Rising Water, Equations DSU.",
    content: (
      <div className="space-y-4">
        <p key="p-24-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          These are particularly valuable because they test the ability to select an appropriate graph algorithm.
        </p>
        <div key="table-24-20" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Key concept</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Network Delay Time</td>
                  <td className="p-3">Dijkstra</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Cheapest Flights Within K Stops</td>
                  <td className="p-3">Modified Bellman-Ford / layered graph</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Find the City With the Smallest Number of Neighbors</td>
                  <td className="p-3">Floyd-Warshall</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Path With Minimum Effort</td>
                  <td className="p-3">Dijkstra or binary search + BFS/DFS</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Swim in Rising Water</td>
                  <td className="p-3">Dijkstra or DSU</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Connecting Cities With Minimum Cost</td>
                  <td className="p-3">MST</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Min Cost to Connect All Points</td>
                  <td className="p-3">Prim or Kruskal</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Rotting Oranges</td>
                  <td className="p-3">Multi-source BFS</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">01 Matrix</td>
                  <td className="p-3">Multi-source BFS</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Shortest Path in Binary Matrix</td>
                  <td className="p-3">BFS</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Minimum Cost to Make at Least One Valid Path in a Grid</td>
                  <td className="p-3">0-1 BFS</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Satisfiability of Equality Equations</td>
                  <td className="p-3">DSU</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Redundant Connection</td>
                  <td className="p-3">DSU</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Number of Operations to Make Network Connected</td>
                  <td className="p-3">DSU</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-24-21" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          A particularly useful interview exercise is to solve the same problem using different valid approaches and compare their complexity.
        </p>
      </div>
    )
  },
  {
    id: 25,
    title: "25. Mastery Checklist",
    summary: "24-point self-assessment checklist tracking conceptual and implementation mastery of shortest paths and MSTs.",
    content: (
      <div className="space-y-4">
        <p key="p-25-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use this checklist to track your understanding and implementation skills.
        </p>
        <p key="p-25-4" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Module learning progress</strong>
        </p>
        <p key="p-25-6" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          # <strong className="font-bold text-stone-900">0%</strong>
        </p>
        <p key="p-25-8" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          0 of 24 concepts completed
        </p>
        <p key="p-25-10" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand directed, undirected, weighted and unweighted graphs
        </p>
        <p key="p-25-12" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand shortest-path and minimum spanning tree differences
        </p>
        <p key="p-25-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement weighted adjacency lists in Java
        </p>
        <p key="p-25-16" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement BFS shortest path and path reconstruction
        </p>
        <p key="p-25-18" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand and implement edge relaxation
        </p>
        <p key="p-25-20" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Dijkstra using PriorityQueue
        </p>
        <p key="p-25-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Explain why Dijkstra cannot guarantee correctness with negative edges
        </p>
        <p key="p-25-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand negative edge weights and negative cycles
        </p>
        <p key="p-25-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Bellman-Ford and detect reachable negative cycles
        </p>
        <p key="p-25-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Floyd-Warshall for all-pairs shortest paths
        </p>
        <p key="p-25-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Detect negative cycles using Floyd-Warshall
        </p>
        <p key="p-25-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand topological sorting
        </p>
        <p key="p-25-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement shortest paths in DAGs
        </p>
        <p key="p-25-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Understand the spanning-tree property of V - 1 edges
        </p>
        <p key="p-25-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Prim's algorithm
        </p>
        <p key="p-25-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement Kruskal's algorithm
        </p>
        <p key="p-25-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement DSU with path compression
        </p>
        <p key="p-25-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement union by size or rank
        </p>
        <p key="p-25-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Use DSU for cycle detection and network connectivity
        </p>
        <p key="p-25-48" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Solve shortest-path problems on grids
        </p>
        <p key="p-25-50" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement multi-source BFS
        </p>
        <p key="p-25-52" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Implement 0-1 BFS using ArrayDeque
        </p>
        <p key="p-25-54" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Compare graph algorithms by complexity and constraints
        </p>
        <p key="p-25-56" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Solve advanced graph interview problems independently
        </p>
        <p key="p-25-58" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Reset checklist
        </p>
      </div>
    )
  },
  {
    id: 26,
    title: "26. Final Revision Sheet",
    summary: "High-density quick revision formulas: relaxation, MST edge count, Bellman-Ford passes, Floyd-Warshall DP, DSU α(V).",
    content: (
      <div className="space-y-4">
        <p key="p-26-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Shortest Path Algorithms</strong>
        </p>
        <div key="table-26-13" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Algorithm</th>
                <th className="p-3 font-semibold">Remember</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">BFS</td>
                  <td className="p-3">Unweighted graphs</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Dijkstra</td>
                  <td className="p-3">Nonnegative edge weights</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Bellman-Ford</td>
                  <td className="p-3">Negative edges and cycle detection</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Floyd-Warshall</td>
                  <td className="p-3">All-pairs shortest paths</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">DAG shortest path</td>
                  <td className="p-3">Topological ordering</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Multi-source BFS</td>
                  <td className="p-3">Multiple starting vertices</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">0-1 BFS</td>
                  <td className="p-3">Edge weights 0 and 1</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-26-14" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Minimum Spanning Trees</strong>
        </p>
        <div key="table-26-21" className="my-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-mono">
                <th className="p-3 font-semibold">Algorithm</th>
                <th className="p-3 font-semibold">Remember</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100/60 text-stone-700 font-sans">
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Prim</td>
                  <td className="p-3">Grow one tree using a minimum connecting edge</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">Kruskal</td>
                  <td className="p-3">Sort edges and reject cycles</td>
                </tr>
              <tr className="hover:bg-stone-50 transition">
                  <td className="p-3">DSU</td>
                  <td className="p-3">Find and merge connected components</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-26-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Most Important Formulas</strong>
        </p>
        <p key="p-26-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Shortest-path relaxation:
        </p>
        <p key="p-26-26" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dist[v]=\min(dist[v],dist[u]+w) </span>
        </p>
        <p key="p-26-28" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Number of edges in a spanning tree:
        </p>
        <p key="p-26-30" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> E_&#123;\text&#123;MST&#125;&#125;=V-1 </span>
        </p>
        <p key="p-26-32" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Bellman-Ford relaxation rounds:
        </p>
        <p key="p-26-34" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> V-1 </span>
        </p>
        <p key="p-26-36" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Floyd-Warshall transition:
        </p>
        <p key="p-26-38" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dist[i][j]=\min(dist[i][j],dist[i][k]+dist[k][j]) </span>
        </p>
        <p key="p-26-40" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          Minimum connections to join <span className="font-mono text-orange-300 font-semibold">C</span> components:
        </p>
        <p key="p-26-42" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> C-1 </span>
        </p>
        <p key="p-26-44" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          DSU operations with optimizations:
        </p>
        <p key="p-26-46" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(\alpha(V))\text&#123; amortized&#125; </span>
        </p>
      </div>
    )
  },
  {
    id: 27,
    title: "27. Interview Q&A & Final Understanding",
    summary: "15 core architectural questions and final decision framework for selecting optimal graph algorithms.",
    content: (
      <div className="space-y-4">
        <h3 key="h3-27-0" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          27. What You Should Be Able to Explain in an Interview
        </h3>
        <p key="p-27-2" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          By the end of this module, you should be able to answer these questions confidently:
        </p>
        <ol key="ol-27-19" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-decimal list-inside">
          <li>Why does BFS find shortest paths in unweighted graphs?</li>
          <li>Why does Dijkstra require nonnegative edge weights?</li>
          <li>What is relaxation in shortest-path algorithms?</li>
          <li>How does a PriorityQueue optimize Dijkstra?</li>
          <li>Why does Bellman-Ford perform <span className="font-mono text-orange-300 font-semibold">V-1</span> iterations?</li>
          <li>How does Bellman-Ford detect a negative cycle?</li>
          <li>How does Floyd-Warshall calculate all-pairs shortest paths?</li>
          <li>Why can a DAG support negative edge weights without negative cycles?</li>
          <li>What is the difference between an MST and a shortest-path tree?</li>
          <li>Why does an MST have exactly <span className="font-mono text-orange-300 font-semibold">V-1</span> edges?</li>
          <li>How do Prim and Kruskal differ?</li>
          <li>Why does Kruskal use DSU?</li>
          <li>How does path compression improve DSU?</li>
          <li>How do multi-source BFS and 0-1 BFS work?</li>
          <li>How do you choose the correct shortest-path algorithm based on graph properties?</li>
      </ol>
        <h3 key="h3-27-20" className="text-lg md:text-xl font-bold text-stone-900 mt-8 mb-3 flex items-center gap-2 border-b border-stone-200 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Final Understanding
        </h3>
        <p key="p-27-22" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          The most important thing in this module is learning to recognize the graph's properties before selecting an algorithm.
        </p>
        <p key="p-27-24" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          For example:
        </p>
        <ul key="ul-27-34" className="my-3 space-y-1.5 text-xs md:text-sm text-stone-700 list-disc list-inside">
          <li>If every edge costs the same, start with BFS.</li>
          <li>If weights are nonnegative, consider Dijkstra.</li>
          <li>If negative weights exist, consider Bellman-Ford.</li>
          <li>If the graph is a DAG, topological relaxation may be faster.</li>
          <li>If you need all-pairs shortest paths, consider Floyd-Warshall.</li>
          <li>If you need the cheapest network connecting all vertices, use Prim or Kruskal.</li>
          <li>If you need to manage connected components efficiently, use DSU.</li>
          <li>If movement costs are only zero or one, use 0-1 BFS.</li>
      </ul>
        <p key="p-27-35" className="my-2 text-xs md:text-sm text-stone-700 leading-relaxed">
          <strong className="font-bold text-stone-900">Your real goal is not to memorize seven different graph algorithms. It is to understand the conditions under which each algorithm is correct, why its data structure is appropriate, and how its complexity changes with the graph's size and structure.</strong>
        </p>
      </div>
    )
  }
];
