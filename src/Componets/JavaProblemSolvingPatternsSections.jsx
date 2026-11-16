import React from "react";

export const JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS = [
  {
    id: 0,
    title: "Module 21 Overview & Problem-Solving Methodology",
    summary: "Curriculum roadmap: Synthesizing recursion, backtracking, DP, graphs, heaps, monotonic stacks, divide-and-conquer, offline queries, and complexity analysis.",
    content: (
      <div className="space-y-4">
        <p key="p-0-0" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;USER_REQUEST&gt;
        </p>
        <p key="p-0-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="font-bold text-white">Module 21 — Advanced Problem-Solving Patterns</strong>
        </p>
        <p key="p-0-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This module brings together the major techniques you have learned throughout Java and DSA. The focus now shifts from understanding individual data structures and algorithms to <strong className="font-bold text-white">recognizing patterns, selecting the right approach, proving correctness, and solving unfamiliar problems efficiently</strong>.
        </p>
        <p key="p-0-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In earlier modules, you learned techniques such as recursion, backtracking, greedy algorithms, graphs, trees, hashing, stacks, queues, and dynamic programming. In this module, you will learn how to combine those techniques to solve advanced problems.
        </p>
        <p key="p-0-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          By the end of this module, you should be able to look at a problem, analyze its constraints, identify its underlying pattern, select an appropriate algorithm and data structure, and justify why your solution works.
        </p>
      </div>
    )
  },
  {
    id: 1,
    title: "1. Backtracking — Advanced Problems",
    summary: "Choose-explore-unchoose framework, pruning strategies, N-Queens with O(1) diagonal arrays, and bitmask state tracking.",
    content: (
      <div className="space-y-4">
        <h3 key="h3-1-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.1 What is backtracking?
        </h3>
        <p key="p-1-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Backtracking is an algorithmic technique that explores multiple possible solutions by making decisions one at a time.
        </p>
        <p key="p-1-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When a decision leads to an invalid or unpromising state, the algorithm reverses that decision and explores another possibility.
        </p>
        <p key="p-1-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It follows three important operations:
        </p>
        <ol key="ol-1-13" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Choose:</strong> Make a decision.</li>
          <li><strong className="font-bold text-white">Explore:</strong> Recursively investigate the result.</li>
          <li><strong className="font-bold text-white">Unchoose:</strong> Undo the decision and try another possibility.</li>
      </ol>
        <p key="p-1-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is sometimes called the choose–explore–unchoose pattern.
        </p>
        <p key="p-1-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Imagine that you are solving a maze. You move forward along one path. If you reach a dead end, you return to the previous intersection and choose another path.
        </p>
        <p key="p-1-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That is backtracking.
        </p>
        <h3 key="h3-1-20" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.2 Backtracking versus brute force
        </h3>
        <p key="p-1-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Both brute force and backtracking explore possible solutions, but they do not necessarily explore them in the same way.
        </p>
        <p key="p-1-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider finding a combination of numbers whose sum equals a target.
        </p>
        <p key="p-1-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given:
        </p>
        <div key="code-1-32" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Numbers = [2, 3, 5]
Target = 7`}</code>
          </pre>
        </div>
        <p key="p-1-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible combinations include:
        </p>
        <div key="code-1-39" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2 + 5 = 7
2 + 2 + 3 = 7`}</code>
          </pre>
        </div>
        <p key="p-1-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A basic brute-force approach might generate every possible combination and check the sum afterward.
        </p>
        <p key="p-1-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Backtracking builds combinations incrementally. When the current sum exceeds the target, it stops exploring that branch.
        </p>
        <p key="p-1-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is called <strong className="font-bold text-white">pruning</strong>.
        </p>
        <p key="p-1-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Backtracking decision tree</strong>
        </p>
        <p key="p-1-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Illustrative search tree for choosing numbers that sum to 7
        </p>
        <p key="p-1-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Start: sum = 0</strong>
        </p>
        <p key="p-1-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Choose 2</strong>
        </p>
        <p key="p-1-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          sum = 2
        </p>
        <p key="p-1-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Choose 3</strong>
        </p>
        <p key="p-1-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          sum = 3
        </p>
        <p key="p-1-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Choose 5</strong>
        </p>
        <p key="p-1-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          sum = 5
        </p>
        <p key="p-1-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each decision creates further choices. Invalid branches are discarded.
        </p>
        <h3 key="h3-1-66" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.3 General backtracking template
        </h3>
        <p key="p-1-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Most backtracking problems can be represented using this structure:
        </p>
        <div key="code-1-95" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`void backtrack(State state) {

    if (isSolution(state)) {
        saveSolution(state);
        return;
    }

    for (Choice choice : getAvailableChoices(state)) {

        if (!isValid(choice, state)) {
            continue;
        }

        // Choose
        applyChoice(state, choice);

        // Explore
        backtrack(state);

        // Unchoose
        undoChoice(state, choice);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-1-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand the responsibilities:
        </p>
        <ul key="ul-1-104" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">State</code> represents the current partial solution.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">isSolution()</code> checks whether a complete solution has been found.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">getAvailableChoices()</code> generates possible decisions.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">isValid()</code> rejects decisions that violate constraints.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">applyChoice()</code> updates the current state.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">undoChoice()</code> restores the previous state.</li>
      </ul>
        <p key="p-1-105" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The most important rule is that the state must be restored correctly after returning from recursion.
        </p>
        <h3 key="h3-1-107" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.4 Advanced backtracking problem: N-Queens
        </h3>
        <p key="p-1-109" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The N-Queens problem asks you to place N queens on an N × N chessboard so that no two queens attack each other.
        </p>
        <p key="p-1-111" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A queen can attack another queen in:
        </p>
        <ul key="ul-1-116" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>The same row.</li>
          <li>The same column.</li>
          <li>The same diagonal.</li>
      </ul>
        <p key="p-1-117" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a 4 × 4 board, one valid arrangement is:
        </p>
        <div key="code-1-125" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`. Q . .
. . . Q
Q . . .
. . Q .`}</code>
          </pre>
        </div>
        <p key="p-1-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The objective is to find all valid arrangements.
        </p>
        <h4 key="h4-1-128" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Step-by-step approach
        </h4>
        <p key="p-1-130" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We place exactly one queen in each row.
        </p>
        <p key="p-1-132" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every row:
        </p>
        <ol key="ol-1-140" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Try each column.</li>
          <li>Check whether that column is safe.</li>
          <li>Check both diagonals.</li>
          <li>Place the queen if the position is valid.</li>
          <li>Recursively process the next row.</li>
          <li>Remove the queen when returning.</li>
      </ol>
        <p key="p-1-141" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We do not need to check the same row because we place only one queen per row.
        </p>
        <h4 key="h4-1-143" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java implementation
        </h4>
        <div key="code-1-219" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class NQueens {

    static List<List<String>> result = new ArrayList<>();

    static boolean[] columns;
    static boolean[] diagonal1;
    static boolean[] diagonal2;

    static void solve(int row, int n, char[][] board) {

        if (row == n) {
            List<String> solution = new ArrayList<>();

            for (char[] line : board) {
                solution.add(new String(line));
            }

            result.add(solution);
            return;
        }

        for (int col = 0; col < n; col++) {

            int d1 = row - col + n - 1;
            int d2 = row + col;

            if (columns[col] ||
                diagonal1[d1] ||
                diagonal2[d2]) {
                continue;
            }

            // Choose
            board[row][col] = 'Q';

            columns[col] = true;
            diagonal1[d1] = true;
            diagonal2[d2] = true;

            // Explore
            solve(row + 1, n, board);

            // Unchoose
            board[row][col] = '.';

            columns[col] = false;
            diagonal1[d1] = false;
            diagonal2[d2] = false;
        }
    }

    public static void main(String[] args) {

        int n = 4;

        char[][] board = new char[n][n];

        for (char[] row : board) {
            Arrays.fill(row, '.');
        }

        columns = new boolean[n];
        diagonal1 = new boolean[2 * n - 1];
        diagonal2 = new boolean[2 * n - 1];

        solve(0, n, board);

        System.out.println(result);
    }
}`}</code>
          </pre>
        </div>
        <h4 key="h4-1-220" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Complexity analysis
        </h4>
        <p key="p-1-222" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The upper-bound search space can be described using permutations of column positions, approximately \<span className="font-mono text-orange-300 font-semibold">O(N!)\</span>, with additional work for checking and recording solutions.
        </p>
        <p key="p-1-224" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The diagonal arrays allow each safety check to run in \<span className="font-mono text-orange-300 font-semibold">O(1)\</span> time.
        </p>
        <p key="p-1-226" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The actual number of explored states is usually smaller because invalid positions are pruned.
        </p>
        <h3 key="h3-1-228" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.5 Other advanced backtracking problems
        </h3>
        <div key="table-1-239" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Main idea</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sudoku Solver</td>
                  <td className="p-3">Assign numbers while maintaining row, column, and box constraints</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Combination Sum</td>
                  <td className="p-3">Explore combinations using recursive choices</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Word Search</td>
                  <td className="p-3">Traverse adjacent cells while tracking visited positions</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Palindrome Partitioning</td>
                  <td className="p-3">Partition a string into valid palindromic pieces</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Graph Coloring</td>
                  <td className="p-3">Assign colors while avoiding conflicts between adjacent vertices</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Hamiltonian Path</td>
                  <td className="p-3">Find a path visiting every vertex exactly once</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Permutations with duplicates</td>
                  <td className="p-3">Sort and skip duplicate choices at the same recursion level</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h4 key="h4-1-240" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Important optimization techniques
        </h4>
        <p key="p-1-242" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Pruning:</strong> Stop exploring when the partial solution cannot become valid.
        </p>
        <p key="p-1-244" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Ordering choices:</strong> Try promising choices first to find solutions earlier.
        </p>
        <p key="p-1-246" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Memoization:</strong> Cache results when different branches reach equivalent states.
        </p>
        <p key="p-1-248" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Constraint propagation:</strong> Use existing decisions to eliminate impossible choices before making another decision.
        </p>
        <p key="p-1-250" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Bitmasking:</strong> Store selected elements or used columns in an integer when the number of elements is small.
        </p>
        <p key="p-1-252" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, if there are at most 20 positions, a bitmask can represent their selection:
        </p>
        <div key="code-1-266" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int mask = 0;

// Mark position 2 as selected
mask = mask | (1 << 2);

// Check whether position 2 is selected
boolean selected = (mask & (1 << 2)) != 0;

// Remove position 2
mask = mask & ~(1 << 2);`}</code>
          </pre>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Branch and Bound Fundamentals",
    summary: "Pruning optimization decision trees using optimistic mathematical bounds (upper/lower bounds, fractional knapsack relaxation).",
    content: (
      <div className="space-y-4">
        <h3 key="h3-2-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.1 What is Branch and Bound?
        </h3>
        <p key="p-2-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Branch and Bound is an optimization technique used to find the best solution among many possible solutions.
        </p>
        <p key="p-2-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It explores a decision tree, but uses mathematical bounds to eliminate branches that cannot produce a better answer than the best solution already found.
        </p>
        <p key="p-2-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The name describes its two main operations:
        </p>
        <ul key="ul-2-12" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li><strong className="font-bold text-white">Branch:</strong> Divide the problem into smaller decision possibilities.</li>
          <li><strong className="font-bold text-white">Bound:</strong> Calculate an optimistic estimate of the best outcome a branch could produce.</li>
      </ul>
        <p key="p-2-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If a branch cannot outperform the current best solution, it can be discarded.
        </p>
        <h3 key="h3-2-15" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.2 Backtracking versus Branch and Bound
        </h3>
        <p key="p-2-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These techniques are related, but their goals are different.
        </p>
        <div key="table-2-26" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Backtracking</th>
                <th className="p-3 font-semibold">Branch and Bound</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Primarily searches for valid solutions</td>
                  <td className="p-3">Primarily searches for an optimal solution</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Prunes invalid or impossible states</td>
                  <td className="p-3">Prunes states that cannot beat the best known result</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Common in puzzles and constraint problems</td>
                  <td className="p-3">Common in optimization problems</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Often uses depth-first search</td>
                  <td className="p-3">Often uses priority queues or other search orders</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Example: Sudoku</td>
                  <td className="p-3">Example: Travelling Salesperson Problem</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-2-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Backtracking can also solve optimization problems. Branch and Bound adds the concept of an optimization bound.
        </p>
        <h3 key="h3-2-29" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.3 Understanding the lower and upper bounds
        </h3>
        <p key="p-2-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you are trying to find the minimum-cost solution.
        </p>
        <p key="p-2-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The current best complete solution costs:
        </p>
        <div key="code-2-38" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Best cost = 50`}</code>
          </pre>
        </div>
        <p key="p-2-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A partial branch has already accumulated:
        </p>
        <div key="code-2-44" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Current cost = 55`}</code>
          </pre>
        </div>
        <p key="p-2-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Since additional decisions cannot reduce the cost, this branch cannot possibly improve the answer.
        </p>
        <p key="p-2-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, we discard it.
        </p>
        <p key="p-2-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For other branches, we calculate a lower bound: the lowest theoretically possible final cost.
        </p>
        <p key="p-2-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose:
        </p>
        <div key="code-2-59" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Current cost = 20
Estimated minimum remaining cost = 35

Lower bound = 20 + 35 = 55`}</code>
          </pre>
        </div>
        <p key="p-2-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because the lower bound is already 55, the branch cannot beat the existing solution of 50.
        </p>
        <p key="p-2-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We prune it.
        </p>
        <p key="p-2-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For maximization problems, we often calculate an upper bound instead. If that upper bound cannot beat the best known result, we discard the branch.
        </p>
        <h3 key="h3-2-66" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.4 Example: 0/1 Knapsack
        </h3>
        <p key="p-2-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Imagine a bag with capacity 10.
        </p>
        <div key="table-2-76" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
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
                  <td className="p-3">40</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">B</td>
                  <td className="p-3">3</td>
                  <td className="p-3">50</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">C</td>
                  <td className="p-3">5</td>
                  <td className="p-3">60</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">D</td>
                  <td className="p-3">7</td>
                  <td className="p-3">80</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-2-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You want to maximize the total value without exceeding the capacity.
        </p>
        <p key="p-2-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In 0/1 Knapsack, each item can either be selected or not selected.
        </p>
        <p key="p-2-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A decision tree branches into:
        </p>
        <div key="code-2-87" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Include item
Do not include item`}</code>
          </pre>
        </div>
        <p key="p-2-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-2-97" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`             Start
           /       \\
       Include A   Exclude A
        /    \\
   Include B  Exclude B`}</code>
          </pre>
        </div>
        <p key="p-2-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Branch and Bound calculates an optimistic maximum value for each partial selection.
        </p>
        <p key="p-2-100" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common strategy is to calculate the upper bound using the fractional knapsack relaxation, where a fraction of an item is temporarily allowed. This gives an optimistic estimate for the remaining value.
        </p>
        <p key="p-2-102" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the optimistic estimate is no better than the best complete solution already found, that branch is eliminated.
        </p>
        <h4 key="h4-2-104" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Where Branch and Bound is used
        </h4>
        <ul key="ul-2-112" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Travelling Salesperson Problem.</li>
          <li>0/1 Knapsack optimization.</li>
          <li>Assignment problems.</li>
          <li>Scheduling optimization.</li>
          <li>Integer programming.</li>
          <li>Combinatorial optimization.</li>
      </ul>
        <p key="p-2-113" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Important:</strong> Branch and Bound can significantly reduce the search space, but it does not guarantee a polynomial-time solution. Some problems still have exponential worst-case complexity.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Divide and Conquer",
    summary: "Divide-conquer-combine paradigm, Merge Sort implementation, recurrence relations, and Master Theorem T(n) = aT(n/b) + f(n).",
    content: (
      <div className="space-y-4">
        <h3 key="h3-3-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.1 What is Divide and Conquer?
        </h3>
        <p key="p-3-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide and Conquer is an algorithm design technique that solves a large problem by splitting it into smaller subproblems.
        </p>
        <p key="p-3-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It follows three stages:
        </p>
        <ol key="ol-3-11" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Divide:</strong> Break the original problem into smaller problems.</li>
          <li><strong className="font-bold text-white">Conquer:</strong> Solve the smaller problems recursively.</li>
          <li><strong className="font-bold text-white">Combine:</strong> Merge their results to obtain the final solution.</li>
      </ol>
        <p key="p-3-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, to sort an array, divide it into two halves, recursively sort each half, and merge the sorted halves.
        </p>
        <p key="p-3-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Divide and Conquer structure</strong>
        </p>
        <p key="p-3-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Original problem</strong>
        </p>
        <p key="p-3-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [8, 3, 6, 2]
        </p>
        <p key="p-3-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Left half</strong>
        </p>
        <p key="p-3-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [8, 3]
        </p>
        <p key="p-3-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Right half</strong>
        </p>
        <p key="p-3-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [6, 2]
        </p>
        <p key="p-3-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Sort</strong>
        </p>
        <p key="p-3-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [3, 8]
        </p>
        <p key="p-3-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Sort</strong>
        </p>
        <p key="p-3-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [2, 6]
        </p>
        <p key="p-3-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Combine</strong>
        </p>
        <p key="p-3-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [2, 3, 6, 8]
        </p>
        <h3 key="h3-3-40" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.2 Merge Sort example
        </h3>
        <p key="p-3-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Merge Sort is a classic Divide and Conquer algorithm.
        </p>
        <h4 key="h4-3-44" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Step 1: Divide
        </h4>
        <div key="code-3-53" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[8, 3, 6, 2]

[8, 3]     [6, 2]

[8] [3]   [6] [2]`}</code>
          </pre>
        </div>
        <p key="p-3-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Continue until each subarray contains one element.
        </p>
        <h4 key="h4-3-56" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Step 2: Conquer
        </h4>
        <p key="p-3-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A single-element array is already sorted.
        </p>
        <h4 key="h4-3-60" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Step 3: Combine
        </h4>
        <p key="p-3-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Merge the smaller sorted arrays:
        </p>
        <div key="code-3-71" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[8] + [3] = [3, 8]

[6] + [2] = [2, 6]

[3, 8] + [2, 6] = [2, 3, 6, 8]`}</code>
          </pre>
        </div>
        <h4 key="h4-3-72" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java implementation
        </h4>
        <div key="code-3-140" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.Arrays;

public class MergeSort {

    static void mergeSort(int[] arr, int left, int right) {

        if (left >= right) {
            return;
        }

        int mid = left + (right - left) / 2;

        // Divide
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        // Combine
        merge(arr, left, mid, right);
    }

    static void merge(
        int[] arr,
        int left,
        int mid,
        int right
    ) {

        int[] temp = new int[right - left + 1];

        int i = left;
        int j = mid + 1;
        int k = 0;

        while (i <= mid && j <= right) {

            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }

        while (i <= mid) {
            temp[k++] = arr[i++];
        }

        while (j <= right) {
            temp[k++] = arr[j++];
        }

        for (int p = 0; p < temp.length; p++) {
            arr[left + p] = temp[p];
        }
    }

    public static void main(String[] args) {

        int[] arr = {8, 3, 6, 2, 9, 1};

        mergeSort(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(arr));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-3-141" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-3-146" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 2, 3, 6, 8, 9]`}</code>
          </pre>
        </div>
        <h3 key="h3-3-147" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.3 Recurrence relations
        </h3>
        <p key="p-3-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide and Conquer algorithms can often be analyzed using recurrence relations.
        </p>
        <p key="p-3-151" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A general form is:
        </p>
        <p key="p-3-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> T(n) = aT(n/b) + f(n) \</span>
        </p>
        <p key="p-3-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where:
        </p>
        <ul key="ul-3-160" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>\<span className="font-mono text-orange-300 font-semibold">a\</span> = number of subproblems.</li>
          <li>\<span className="font-mono text-orange-300 font-semibold">n/b\</span> = approximate size of each subproblem.</li>
          <li>\<span className="font-mono text-orange-300 font-semibold">f(n)\</span> = work done outside recursive calls.</li>
      </ul>
        <p key="p-3-161" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Merge Sort:
        </p>
        <p key="p-3-163" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> T(n)=2T(n/2)+O(n) \</span>
        </p>
        <p key="p-3-165" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This gives:
        </p>
        <p key="p-3-167" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> T(n)=O(n\log n) \</span>
        </p>
        <p key="p-3-169" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The recurrence can be analyzed using the Master Theorem.
        </p>
        <h4 key="h4-3-171" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Common Divide and Conquer algorithms
        </h4>
        <div key="table-3-181" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Algorithm</th>
                <th className="p-3 font-semibold">Time complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Binary Search</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(\log n)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Merge Sort</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(n\log n)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Quick Sort</td>
                  <td className="p-3">Average \<span className="font-mono text-orange-300 font-semibold">O(n\log n)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Quick Sort</td>
                  <td className="p-3">Worst \<span className="font-mono text-orange-300 font-semibold">O(n^2)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Closest Pair of Points</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(n\log n)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Fast Exponentiation</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(\log n)\</span></td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-3-182" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Key distinction:</strong> Divide and Conquer usually creates independent subproblems. Dynamic Programming is particularly useful when subproblems overlap and their results can be reused.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Binary Search on Answer",
    summary: "Searching over monotonic feasibility solution spaces, Ship Packages within D Days, and recognizing min-max patterns.",
    content: (
      <div className="space-y-4">
        <p key="p-4-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is one of the most important advanced problem-solving techniques.
        </p>
        <h3 key="h3-4-4" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.1 What is Binary Search on Answer?
        </h3>
        <p key="p-4-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Regular binary search searches for a target inside a sorted collection.
        </p>
        <p key="p-4-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary Search on Answer searches over a range of possible answers.
        </p>
        <p key="p-4-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of asking:
        </p>
        <blockquote key="bq-4-12" className="my-3 pl-4 border-l-2 border-orange-500 text-xs md:text-sm text-orange-300/90 italic bg-orange-500/5 py-2 rounded-r-lg">
          Is this element present in the array?
        </blockquote>
        <p key="p-4-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We ask:
        </p>
        <blockquote key="bq-4-16" className="my-3 pl-4 border-l-2 border-orange-500 text-xs md:text-sm text-orange-300/90 italic bg-orange-500/5 py-2 rounded-r-lg">
          Is this candidate answer feasible?
        </blockquote>
        <p key="p-4-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you are trying to find the minimum capacity of a ship needed to deliver packages within a specified number of days.
        </p>
        <p key="p-4-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You do not know the capacity directly, but you know:
        </p>
        <ul key="ul-4-24" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>The smallest possible capacity is the weight of the heaviest package.</li>
          <li>The largest possible capacity is the sum of all package weights.</li>
      </ul>
        <p key="p-4-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, the answer must lie inside this range.
        </p>
        <p key="p-4-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You can binary-search the capacity.
        </p>
        <h3 key="h3-4-29" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.2 The monotonic property
        </h3>
        <p key="p-4-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary Search on Answer works when feasibility is monotonic.
        </p>
        <p key="p-4-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a minimum-answer problem:
        </p>
        <div key="code-4-39" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Candidate answer:  5  6  7  8  9  10  11
Feasible:          No No No Yes Yes Yes Yes`}</code>
          </pre>
        </div>
        <p key="p-4-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once a candidate becomes feasible, all larger candidates must also be feasible.
        </p>
        <p key="p-4-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a maximum-answer problem, the pattern often looks like:
        </p>
        <div key="code-4-48" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Candidate answer:  1  2  3  4  5  6  7
Feasible:          Yes Yes Yes Yes No No No`}</code>
          </pre>
        </div>
        <p key="p-4-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once a candidate becomes infeasible, every larger candidate is also infeasible.
        </p>
        <p key="p-4-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This monotonicity allows us to eliminate half the search range after every check.
        </p>
        <h3 key="h3-4-53" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.3 Example: Capacity to Ship Packages Within D Days
        </h3>
        <p key="p-4-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given:
        </p>
        <div key="code-4-61" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
days = 5`}</code>
          </pre>
        </div>
        <p key="p-4-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the minimum ship capacity needed to deliver every package in order within five days.
        </p>
        <h4 key="h4-4-64" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Step 1: Define the search range
        </h4>
        <p key="p-4-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum capacity:
        </p>
        <p key="p-4-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> low = \max(weights)=10 \</span>
        </p>
        <p key="p-4-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum capacity:
        </p>
        <p key="p-4-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> high = \sum(weights)=55 \</span>
        </p>
        <h4 key="h4-4-74" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Step 2: Test a candidate capacity
        </h4>
        <p key="p-4-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the capacity is 15.
        </p>
        <p key="p-4-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We load packages in order without exceeding 15.
        </p>
        <div key="code-4-87" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Day 1: 1 + 2 + 3 + 4 + 5 = 15
Day 2: 6 + 7 = 13
Day 3: 8 = 8
Day 4: 9 = 9
Day 5: 10 = 10`}</code>
          </pre>
        </div>
        <p key="p-4-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Five days are sufficient. Therefore, capacity 15 is feasible.
        </p>
        <p key="p-4-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now test smaller capacities to find the minimum.
        </p>
        <h4 key="h4-4-92" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Step 3: Binary Search
        </h4>
        <div key="code-4-161" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class ShipCapacity {

    static boolean canShip(
        int[] weights,
        int days,
        int capacity
    ) {

        int requiredDays = 1;
        int currentLoad = 0;

        for (int weight : weights) {

            if (currentLoad + weight > capacity) {
                requiredDays++;
                currentLoad = 0;
            }

            currentLoad += weight;
        }

        return requiredDays <= days;
    }

    static int minimumCapacity(
        int[] weights,
        int days
    ) {

        int low = 0;
        int high = 0;

        for (int weight : weights) {
            low = Math.max(low, weight);
            high += weight;
        }

        while (low < high) {

            int mid = low + (high - low) / 2;

            if (canShip(weights, days, mid)) {

                // Try a smaller capacity
                high = mid;

            } else {

                // Capacity is insufficient
                low = mid + 1;
            }
        }

        return low;
    }

    public static void main(String[] args) {

        int[] weights = {
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        };

        System.out.println(minimumCapacity(weights, 5));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-4-162" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-4-167" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`15`}</code>
          </pre>
        </div>
        <p key="p-4-168" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <ul key="ul-4-173" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Feasibility check: \<span className="font-mono text-orange-300 font-semibold">O(n)\</span>.</li>
          <li>Binary search iterations: \<span className="font-mono text-orange-300 font-semibold">O(\log S)\</span>, where \<span className="font-mono text-orange-300 font-semibold">S\</span> is the search-range size.</li>
          <li>Total: \<span className="font-mono text-orange-300 font-semibold">O(n\log S)\</span>.</li>
      </ul>
        <h3 key="h3-4-174" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.4 Common Binary Search on Answer problems
        </h3>
        <div key="table-4-185" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">What you search for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Koko Eating Bananas</td>
                  <td className="p-3">Minimum eating speed</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Allocate Books</td>
                  <td className="p-3">Minimum maximum pages per student</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Aggressive Cows</td>
                  <td className="p-3">Maximum minimum distance</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Ship Packages</td>
                  <td className="p-3">Minimum shipping capacity</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Minimum Days to Make Bouquets</td>
                  <td className="p-3">Minimum number of days</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Split Array Largest Sum</td>
                  <td className="p-3">Minimum possible largest subarray sum</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Factory Production</td>
                  <td className="p-3">Minimum time to produce a target quantity</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h4 key="h4-4-186" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          How to recognize this pattern
        </h4>
        <p key="p-4-188" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Look for phrases such as:
        </p>
        <ul key="ul-4-196" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Find the minimum possible maximum.</li>
          <li>Find the maximum possible minimum.</li>
          <li>Minimum speed needed.</li>
          <li>Minimum time required.</li>
          <li>Largest distance possible.</li>
          <li>Smallest capacity that satisfies the condition.</li>
      </ul>
        <p key="p-4-197" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then ask:
        </p>
        <ol key="ol-4-202" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Can I define a range of possible answers?</li>
          <li>Can I check whether a candidate is feasible?</li>
          <li>Is feasibility monotonic?</li>
      </ol>
        <p key="p-4-203" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If all three answers are yes, Binary Search on Answer is a strong candidate.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Monotonic Stack Patterns",
    summary: "Maintaining monotonic ordering: Next Greater Element, index tracking, Stock Span, and Largest Rectangle in Histogram O(N).",
    content: (
      <div className="space-y-4">
        <h3 key="h3-5-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.1 What is a Monotonic Stack?
        </h3>
        <p key="p-5-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A Monotonic Stack is a stack that maintains its elements in a particular order.
        </p>
        <p key="p-5-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It can maintain either:
        </p>
        <ul key="ul-5-10" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Increasing order.</li>
          <li>Decreasing order.</li>
      </ul>
        <p key="p-5-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When a new element arrives, we remove elements that violate the required order.
        </p>
        <p key="p-5-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This helps solve problems involving:
        </p>
        <ul key="ul-5-22" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Next Greater Element.</li>
          <li>Next Smaller Element.</li>
          <li>Previous Greater Element.</li>
          <li>Previous Smaller Element.</li>
          <li>Stock Span.</li>
          <li>Largest Rectangle in Histogram.</li>
          <li>Trapping Rain Water.</li>
      </ul>
        <h3 key="h3-5-23" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.2 Increasing Monotonic Stack
        </h3>
        <p key="p-5-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An increasing stack maintains elements in non-decreasing order from bottom to top.
        </p>
        <p key="p-5-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-5-47" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Input: 2, 5, 3, 7

Process 2:
Stack: [2]

Process 5:
Stack: [2, 5]

Process 3:
Remove 5 because 5 > 3
Stack: [2, 3]

Process 7:
Remove 3
Remove 2
Stack: [7]`}</code>
          </pre>
        </div>
        <p key="p-5-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The exact removal condition depends on whether the problem requires strict or non-strict comparisons.
        </p>
        <h3 key="h3-5-50" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.3 Decreasing Monotonic Stack
        </h3>
        <p key="p-5-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A decreasing stack maintains elements in non-increasing order from bottom to top.
        </p>
        <p key="p-5-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is commonly used to find the next greater element.
        </p>
        <h4 key="h4-5-56" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example: Next Greater Element
        </h4>
        <p key="p-5-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given:
        </p>
        <div key="code-5-63" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[4, 5, 2, 10, 8]`}</code>
          </pre>
        </div>
        <p key="p-5-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the first greater element to the right of every element.
        </p>
        <p key="p-5-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Result:
        </p>
        <div key="code-5-71" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[5, 10, 10, -1, -1]`}</code>
          </pre>
        </div>
        <p key="p-5-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Explanation:
        </p>
        <ul key="ul-5-79" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Next greater element of 4 is 5.</li>
          <li>Next greater element of 5 is 10.</li>
          <li>Next greater element of 2 is 10.</li>
          <li>10 has no greater element on its right.</li>
          <li>8 has no greater element on its right.</li>
      </ul>
        <h4 key="h4-5-80" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java implementation
        </h4>
        <div key="code-5-123" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class NextGreaterElement {

    static int[] findNextGreater(int[] arr) {

        int n = arr.length;

        int[] answer = new int[n];

        Arrays.fill(answer, -1);

        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < n; i++) {

            while (!stack.isEmpty() &&
                   arr[i] > arr[stack.peek()]) {

                int index = stack.pop();

                answer[index] = arr[i];
            }

            stack.push(i);
        }

        return answer;
    }

    public static void main(String[] args) {

        int[] arr = {4, 5, 2, 10, 8};

        System.out.println(
            Arrays.toString(findNextGreater(arr))
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-5-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-5-129" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[5, 10, 10, -1, -1]`}</code>
          </pre>
        </div>
        <p key="p-5-130" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We store indices rather than values because we need to know exactly which element has found its next greater element.
        </p>
        <h3 key="h3-5-132" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.4 Largest Rectangle in Histogram
        </h3>
        <p key="p-5-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a classic advanced monotonic-stack problem.
        </p>
        <p key="p-5-136" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given bar heights:
        </p>
        <div key="code-5-141" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 1, 5, 6, 2, 3]`}</code>
          </pre>
        </div>
        <p key="p-5-142" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the largest rectangular area that can fit inside the histogram.
        </p>
        <p key="p-5-144" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For each bar, we need:
        </p>
        <ul key="ul-5-148" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Nearest smaller bar to the left.</li>
          <li>Nearest smaller bar to the right.</li>
      </ul>
        <p key="p-5-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These determine how far a rectangle of that bar's height can extend.
        </p>
        <p key="p-5-151" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For bar \<span className="font-mono text-orange-300 font-semibold">i\</span>:
        </p>
        <p key="p-5-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> width = rightSmaller_i-leftSmaller_i-1 \</span>
        </p>
        <p key="p-5-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> area = height_i \times width \</span>
        </p>
        <p key="p-5-157" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation:
        </p>
        <div key="code-5-210" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class LargestRectangle {

    static int largestRectangle(int[] heights) {

        int n = heights.length;

        Stack<Integer> stack = new Stack<>();

        int maxArea = 0;

        for (int i = 0; i <= n; i++) {

            int currentHeight =
                (i == n) ? 0 : heights[i];

            while (!stack.isEmpty() &&
                   heights[stack.peek()] > currentHeight) {

                int height = heights[stack.pop()];

                int width;

                if (stack.isEmpty()) {
                    width = i;
                } else {
                    width = i - stack.peek() - 1;
                }

                maxArea = Math.max(
                    maxArea,
                    height * width
                );
            }

            stack.push(i);
        }

        return maxArea;
    }

    public static void main(String[] args) {

        int[] heights = {2, 1, 5, 6, 2, 3};

        System.out.println(largestRectangle(heights));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-5-211" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-5-216" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`10`}</code>
          </pre>
        </div>
        <p key="p-5-217" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm runs in \<span className="font-mono text-orange-300 font-semibold">O(n)\</span>, because each index is pushed onto and popped from the stack at most once.
        </p>
        <p key="p-5-219" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Important:</strong> Monotonic Stack is especially useful when the problem asks for the nearest greater or smaller element in a particular direction.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Monotonic Queue Patterns",
    summary: "Double-ended queues (ArrayDeque) for extrema over moving ranges, Sliding Window Maximum in linear O(N) time.",
    content: (
      <div className="space-y-4">
        <h3 key="h3-6-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.1 What is a Monotonic Queue?
        </h3>
        <p key="p-6-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A Monotonic Queue maintains its elements in sorted order while supporting efficient insertion and removal from both ends.
        </p>
        <p key="p-6-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In Java, we commonly implement it using <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">ArrayDeque</code>.
        </p>
        <p key="p-6-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is particularly useful for finding minimum or maximum values in a sliding window.
        </p>
        <p key="p-6-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A Monotonic Stack usually finds the next or previous greater/smaller element. A Monotonic Queue is commonly used when we need an extremum over a moving range.
        </p>
        <h3 key="h3-6-12" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.2 Sliding Window Maximum
        </h3>
        <p key="p-6-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given:
        </p>
        <div key="code-6-20" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array = [1, 3, -1, -3, 5, 3, 6, 7]
Window size = 3`}</code>
          </pre>
        </div>
        <p key="p-6-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the maximum of every consecutive window of size 3.
        </p>
        <p key="p-6-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Windows:
        </p>
        <div key="code-6-33" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 3, -1]  → 3
[3, -1, -3] → 3
[-1, -3, 5] → 5
[-3, 5, 3]  → 5
[5, 3, 6]   → 6
[3, 6, 7]   → 7`}</code>
          </pre>
        </div>
        <p key="p-6-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-6-39" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[3, 3, 5, 5, 6, 7]`}</code>
          </pre>
        </div>
        <p key="p-6-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A brute-force solution takes \<span className="font-mono text-orange-300 font-semibold">O(nk)\</span>, where \<span className="font-mono text-orange-300 font-semibold">k\</span> is the window size.
        </p>
        <p key="p-6-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Monotonic Queue approach takes \<span className="font-mono text-orange-300 font-semibold">O(n)\</span>.
        </p>
        <h3 key="h3-6-44" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.3 Java implementation
        </h3>
        <div key="code-6-103" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class SlidingWindowMaximum {

    static int[] maxSlidingWindow(int[] arr, int k) {

        int n = arr.length;

        if (k <= 0 || k > n) {
            throw new IllegalArgumentException(
                "Invalid window size"
            );
        }

        int[] result = new int[n - k + 1];

        Deque<Integer> deque = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {

            // Remove indices outside the window
            while (!deque.isEmpty() &&
                   deque.peekFirst() <= i - k) {

                deque.pollFirst();
            }

            // Remove smaller elements from the back
            while (!deque.isEmpty() &&
                   arr[deque.peekLast()] <= arr[i]) {

                deque.pollLast();
            }

            deque.offerLast(i);

            // Record maximum once the first full window forms
            if (i >= k - 1) {
                result[i - k + 1] =
                    arr[deque.peekFirst()];
            }
        }

        return result;
    }

    public static void main(String[] args) {

        int[] arr = {1, 3, -1, -3, 5, 3, 6, 7};

        System.out.println(
            Arrays.toString(maxSlidingWindow(arr, 3))
        );
    }
}`}</code>
          </pre>
        </div>
        <h4 key="h4-6-104" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Why does it work?
        </h4>
        <p key="p-6-106" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The deque stores indices in decreasing order of their values.
        </p>
        <p key="p-6-108" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <ul key="ul-6-113" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>The front always points to the maximum element.</li>
          <li>Smaller elements behind a newly inserted larger element can be removed because they can never become the maximum while the newer, larger element remains inside the window.</li>
          <li>Old indices are removed when they leave the window.</li>
      </ul>
        <h4 key="h4-6-114" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Common applications
        </h4>
        <ul key="ul-6-121" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Sliding Window Maximum.</li>
          <li>Sliding Window Minimum.</li>
          <li>Shortest Subarray with Sum at Least K.</li>
          <li>Constrained Subsequence Sum.</li>
          <li>Dynamic Programming with moving-window transitions.</li>
      </ul>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Graph Problem-Solving Patterns",
    summary: "Graph taxonomy: Traversal, Connected Components, Shortest Path selection, Topological Sorting, DSU, and Bipartite 2-coloring.",
    content: (
      <div className="space-y-4">
        <p key="p-7-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Graph algorithms are not just individual techniques such as BFS and DFS. Many graph problems follow recognizable patterns.
        </p>
        <p key="p-7-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The first step is identifying what the vertices and edges represent.
        </p>
        <p key="p-7-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <ul key="ul-7-13" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Cities and roads.</li>
          <li>Computers and network connections.</li>
          <li>Courses and prerequisites.</li>
          <li>Tasks and dependencies.</li>
          <li>People and relationships.</li>
      </ul>
        <h3 key="h3-7-14" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.1 Pattern 1: Traversal and Connected Components
        </h3>
        <p key="p-7-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use BFS or DFS when you need to explore connected regions.
        </p>
        <p key="p-7-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical problems:
        </p>
        <ul key="ul-7-25" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Number of Islands.</li>
          <li>Connected Components.</li>
          <li>Flood Fill.</li>
          <li>Find whether a path exists.</li>
          <li>Count separate groups in a network.</li>
      </ul>
        <p key="p-7-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">DFS</strong> explores deeply before returning.
        </p>
        <p key="p-7-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">BFS</strong> explores level by level.
        </p>
        <p key="p-7-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For an unweighted graph, BFS also finds shortest paths measured by number of edges.
        </p>
        <h3 key="h3-7-32" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.2 Pattern 2: Shortest Path
        </h3>
        <p key="p-7-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Different shortest-path algorithms work under different assumptions.
        </p>
        <div key="table-7-44" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Algorithm</th>
                <th className="p-3 font-semibold">Suitable situation</th>
                <th className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">BFS</td>
                  <td className="p-3">Unweighted edges</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(V+E)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">0–1 BFS</td>
                  <td className="p-3">Edge weights are 0 or 1</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(V+E)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Dijkstra</td>
                  <td className="p-3">Non-negative edge weights</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O((V+E)\log V)\</span> with a heap</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Bellman–Ford</td>
                  <td className="p-3">Negative edges allowed; detects negative cycles</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(VE)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Floyd–Warshall</td>
                  <td className="p-3">All-pairs shortest paths</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(V^3)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">DAG shortest path</td>
                  <td className="p-3">Directed acyclic graph</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(V+E)\</span></td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-7-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common mistake is using Dijkstra when negative-weight edges are present. Its usual correctness guarantee requires non-negative edge weights.
        </p>
        <h3 key="h3-7-47" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.3 Pattern 3: Topological Sorting
        </h3>
        <p key="p-7-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Topological sorting is used on a Directed Acyclic Graph (DAG).
        </p>
        <p key="p-7-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose:
        </p>
        <div key="code-7-56" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Learn Java → Learn DSA → Learn Algorithms`}</code>
          </pre>
        </div>
        <p key="p-7-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You cannot study Algorithms before completing its prerequisites.
        </p>
        <p key="p-7-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Topological sorting produces an order that respects every dependency.
        </p>
        <p key="p-7-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two important approaches:
        </p>
        <ul key="ul-7-65" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Kahn's Algorithm using indegrees and a queue.</li>
          <li>DFS using completion order.</li>
      </ul>
        <p key="p-7-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Applications:
        </p>
        <ul key="ul-7-72" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Course scheduling.</li>
          <li>Build systems.</li>
          <li>Task scheduling.</li>
          <li>Dependency resolution.</li>
      </ul>
        <p key="p-7-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If Kahn's Algorithm processes fewer than \<span className="font-mono text-orange-300 font-semibold">V\</span> vertices, the graph contains a directed cycle.
        </p>
        <h3 key="h3-7-75" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.4 Pattern 4: Disjoint Set Union (DSU)
        </h3>
        <p key="p-7-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DSU, also called Union-Find, manages groups of connected elements.
        </p>
        <p key="p-7-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It provides two primary operations:
        </p>
        <p key="p-7-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Find:</strong> Identify the representative of a group.
        </p>
        <p key="p-7-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Union:</strong> Combine two groups.
        </p>
        <p key="p-7-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          With path compression and union by size or rank, operations are nearly constant amortized time.
        </p>
        <p key="p-7-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Applications:
        </p>
        <ul key="ul-7-94" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Number of connected components.</li>
          <li>Cycle detection in an undirected graph.</li>
          <li>Kruskal's Minimum Spanning Tree algorithm.</li>
          <li>Network connectivity.</li>
          <li>Grouping related objects.</li>
      </ul>
        <h3 key="h3-7-95" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.5 Pattern 5: Bipartite Graphs
        </h3>
        <p key="p-7-97" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A graph is bipartite when its vertices can be divided into two sets such that no edge connects two vertices in the same set.
        </p>
        <p key="p-7-99" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common way to check this is using BFS or DFS two-coloring.
        </p>
        <div key="code-7-105" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Group A: 1, 3
Group B: 2, 4`}</code>
          </pre>
        </div>
        <p key="p-7-106" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Applications include:
        </p>
        <ul key="ul-7-112" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Matching problems.</li>
          <li>Job assignment.</li>
          <li>Team partitioning.</li>
          <li>Conflict detection.</li>
      </ul>
        <p key="p-7-113" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A graph is bipartite exactly when it contains no odd-length cycle.
        </p>
        <h3 key="h3-7-115" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.6 Pattern 6: Minimum Spanning Tree
        </h3>
        <p key="p-7-117" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A Minimum Spanning Tree connects every vertex of a connected, weighted, undirected graph using the minimum possible total edge weight.
        </p>
        <p key="p-7-119" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two major algorithms:
        </p>
        <ul key="ul-7-123" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Kruskal's Algorithm: Sort edges and use DSU to avoid cycles.</li>
          <li>Prim's Algorithm: Grow the tree from a starting vertex using a priority queue.</li>
      </ul>
        <p key="p-7-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Applications:
        </p>
        <ul key="ul-7-130" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Network cable design.</li>
          <li>Road construction.</li>
          <li>Electrical infrastructure.</li>
          <li>Cost-efficient connectivity.</li>
      </ul>
        <h4 key="h4-7-131" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Graph pattern recognition table
        </h4>
        <div key="table-7-145" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem description</th>
                <th className="p-3 font-semibold">Likely approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Explore all reachable nodes</td>
                  <td className="p-3">DFS / BFS</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Shortest path without weights</td>
                  <td className="p-3">BFS</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Shortest path with non-negative weights</td>
                  <td className="p-3">Dijkstra</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Negative-weight edges</td>
                  <td className="p-3">Bellman–Ford</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Dependencies and ordering</td>
                  <td className="p-3">Topological Sort</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Connected components with repeated unions</td>
                  <td className="p-3">DSU</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Minimum total connection cost</td>
                  <td className="p-3">MST</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Check two-group assignment</td>
                  <td className="p-3">Bipartite Coloring</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Count distinct regions in a grid</td>
                  <td className="p-3">DFS / BFS</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Shortest path with weights 0 and 1</td>
                  <td className="p-3">0–1 BFS</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "8. DP Problem Classification",
    summary: "Categorizing 8 DP archetypes: 1D Linear, Grid, Knapsack, String/Subsequence, Interval, Tree DP, Bitmask, and Digit DP.",
    content: (
      <div className="space-y-4">
        <p key="p-8-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic Programming becomes easier when you classify the problem before writing code.
        </p>
        <p key="p-8-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of memorizing hundreds of DP solutions, learn how to recognize recurring state structures.
        </p>
        <h3 key="h3-8-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.1 What makes a problem suitable for DP?
        </h3>
        <p key="p-8-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two important characteristics are:
        </p>
        <p key="p-8-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Overlapping Subproblems:</strong> The same smaller problem is solved multiple times.
        </p>
        <p key="p-8-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Optimal Substructure:</strong> The solution to a larger problem can be constructed from solutions to smaller problems.
        </p>
        <p key="p-8-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP normally stores the results of subproblems so they do not need to be recomputed.
        </p>
        <h3 key="h3-8-16" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.2 Major DP categories
        </h3>
        <h4 key="h4-8-18" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          A. Linear or 1D DP
        </h4>
        <p key="p-8-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The state is typically represented using one changing index.
        </p>
        <p key="p-8-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-8-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[i] = best result up to index i`}</code>
          </pre>
        </div>
        <p key="p-8-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Common problems:
        </p>
        <ul key="ul-8-35" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Fibonacci.</li>
          <li>Climbing Stairs.</li>
          <li>House Robber.</li>
          <li>Maximum Sum Subarray variants.</li>
          <li>Minimum Cost Climbing Stairs.</li>
      </ul>
        <p key="p-8-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example transition for Climbing Stairs:
        </p>
        <p key="p-8-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> dp[i]=dp[i-1]+dp[i-2] \</span>
        </p>
        <h4 key="h4-8-40" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          B. Grid DP
        </h4>
        <p key="p-8-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The state is represented by row and column.
        </p>
        <div key="code-8-47" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[i][j] = best number of ways or minimum cost to reach cell (i, j)`}</code>
          </pre>
        </div>
        <p key="p-8-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Common problems:
        </p>
        <ul key="ul-8-55" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Unique Paths.</li>
          <li>Minimum Path Sum.</li>
          <li>Grid obstacles.</li>
          <li>Maximum path value.</li>
          <li>Dungeon Game.</li>
      </ul>
        <h4 key="h4-8-56" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          C. Knapsack DP
        </h4>
        <p key="p-8-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when you select items subject to a capacity or target sum.
        </p>
        <p key="p-8-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Common variants:
        </p>
        <ul key="ul-8-68" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>0/1 Knapsack.</li>
          <li>Unbounded Knapsack.</li>
          <li>Bounded Knapsack.</li>
          <li>Subset Sum.</li>
          <li>Partition Equal Subset Sum.</li>
          <li>Coin Change.</li>
      </ul>
        <p key="p-8-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For 0/1 Knapsack:
        </p>
        <p key="p-8-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> dp[i][w]=\max(dp[i-1][w],v_i+dp[i-1][w-w_i]) \</span>
        </p>
        <p key="p-8-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The first option excludes the item; the second includes it if the capacity permits.
        </p>
        <h4 key="h4-8-75" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          D. String and Subsequence DP
        </h4>
        <p key="p-8-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Common problems:
        </p>
        <ul key="ul-8-85" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Longest Common Subsequence.</li>
          <li>Longest Increasing Subsequence.</li>
          <li>Edit Distance.</li>
          <li>Longest Palindromic Subsequence.</li>
          <li>Distinct Subsequences.</li>
          <li>Minimum Insertions to Make a String Palindrome.</li>
      </ul>
        <p key="p-8-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These often require states involving positions in one or more strings.
        </p>
        <p key="p-8-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Longest Common Subsequence:
        </p>
        <p key="p-8-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> dp[i][j]= \begin&#123;cases&#125; 1+dp[i-1][j-1] &amp; \text&#123;if characters match&#125;\\\ \max(dp[i-1][j],dp[i][j-1]) &amp; \text&#123;otherwise&#125; \end&#123;cases&#125; \</span>
        </p>
        <h4 key="h4-8-92" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          E. Interval DP
        </h4>
        <p key="p-8-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when the state describes a subarray or substring.
        </p>
        <div key="code-8-99" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[l][r] = optimal answer for interval [l, r]`}</code>
          </pre>
        </div>
        <p key="p-8-100" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-8-106" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Matrix Chain Multiplication.</li>
          <li>Burst Balloons.</li>
          <li>Palindrome partitioning variants.</li>
          <li>Optimal Binary Search Tree.</li>
      </ul>
        <h4 key="h4-8-107" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          F. Tree DP
        </h4>
        <p key="p-8-109" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The state depends on the current node and its children.
        </p>
        <p key="p-8-111" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-8-118" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Maximum Independent Set on a Tree.</li>
          <li>House Robber III.</li>
          <li>Tree Diameter.</li>
          <li>Maximum Path Sum.</li>
          <li>Count or optimize selections of nodes.</li>
      </ul>
        <h4 key="h4-8-119" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          G. Bitmask DP
        </h4>
        <p key="p-8-121" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when a subset of a small collection must be represented as the state.
        </p>
        <p key="p-8-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, a mask can describe which cities have already been visited.
        </p>
        <p key="p-8-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> dp[mask][i] \</span>
        </p>
        <p key="p-8-127" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This might represent the minimum cost of visiting the subset represented by <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">mask</code> and finishing at city <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">i</code>.
        </p>
        <p key="p-8-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Applications:
        </p>
        <ul key="ul-8-135" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Travelling Salesperson Problem.</li>
          <li>Assignment problems.</li>
          <li>Subset ordering.</li>
          <li>Small-state scheduling.</li>
      </ul>
        <h4 key="h4-8-136" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          H. Digit DP
        </h4>
        <p key="p-8-138" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Digit DP counts numbers satisfying particular digit-based rules within a range.
        </p>
        <p key="p-8-140" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-8-146" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Count numbers without repeated digits.</li>
          <li>Count numbers with digit sum equal to a target.</li>
          <li>Count numbers containing a particular digit.</li>
          <li>Count numbers satisfying a modulo condition.</li>
      </ul>
        <p key="p-8-147" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common state contains:
        </p>
        <div key="code-8-155" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`position
tight
started
additional constraint state`}</code>
          </pre>
        </div>
        <p key="p-8-156" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where:
        </p>
        <ul key="ul-8-161" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">position</code> is the current digit position.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">tight</code> indicates whether the prefix still matches the upper bound.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">started</code> indicates whether a non-leading-zero digit has been chosen.</li>
      </ul>
        <h3 key="h3-8-162" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.3 How to classify an unfamiliar DP problem
        </h3>
        <p key="p-8-164" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use this process:
        </p>
        <ol key="ol-8-175" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Identify what must be optimized or counted.</li>
          <li>Identify the decisions at each step.</li>
          <li>Identify what information from earlier decisions affects future decisions.</li>
          <li>Use that information to define the state.</li>
          <li>Define transitions between states.</li>
          <li>Establish base cases.</li>
          <li>Choose memoization or tabulation.</li>
          <li>Analyze time and space complexity.</li>
          <li>Consider space optimization only after the correct transition is established.</li>
      </ol>
        <p key="p-8-176" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Important:</strong> The state must contain all information necessary to determine the future. If two situations have different future possibilities, they should not be merged into the same state.
        </p>
      </div>
    )
  },
  {
    id: 9,
    title: "9. Tree DP Patterns",
    summary: "Post-order tree processing, Maximum Independent Set (take vs skip), tree diameter, and subtree aggregations in O(V).",
    content: (
      <div className="space-y-4">
        <h3 key="h3-9-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.1 What is Tree DP?
        </h3>
        <p key="p-9-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP is Dynamic Programming applied to tree structures.
        </p>
        <p key="p-9-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many tree problems can be solved using DFS because every node's answer depends on answers calculated for its children.
        </p>
        <p key="p-9-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A typical process is:
        </p>
        <ol key="ol-9-15" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Start at the root.</li>
          <li>Recursively process each child.</li>
          <li>Receive the child's calculated result.</li>
          <li>Combine child results to calculate the current node's result.</li>
          <li>Return the current node's result to its parent.</li>
      </ol>
        <p key="p-9-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is commonly known as postorder tree processing.
        </p>
        <h3 key="h3-9-18" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.2 Example: Maximum Independent Set on a Tree
        </h3>
        <p key="p-9-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The objective is to choose the maximum number of nodes such that no two selected nodes are directly connected.
        </p>
        <p key="p-9-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every node, define two states:
        </p>
        <div key="code-9-28" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`take[node] = best answer when selecting this node
skip[node] = best answer when not selecting this node`}</code>
          </pre>
        </div>
        <p key="p-9-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we select the current node, we cannot select its children.
        </p>
        <p key="p-9-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> take[u]=1+\sum\_&#123;v\in children(u)&#125;skip[v] \</span>
        </p>
        <p key="p-9-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we do not select the current node, each child may be selected or skipped:
        </p>
        <p key="p-9-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> skip[u]=\sum\_&#123;v\in children(u)&#125;\max(take[v],skip[v]) \</span>
        </p>
        <p key="p-9-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final answer is:
        </p>
        <p key="p-9-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> \max(take[root],skip[root]) \</span>
        </p>
        <h4 key="h4-9-41" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <p key="p-9-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Example tree</strong>
        </p>
        <p key="p-9-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selecting node 1 prevents selecting nodes 2 and 3. Alternatively, select nodes 2 and 3, then consider their children.
        </p>
        <p key="p-9-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The best selection is nodes 2, 3, 4, and 5 only if the tree contains the shown edges and the selected nodes do not share an edge. In the pictured tree, selecting 2 prevents selecting 4 and 5, so the actual best solution must compare the two DP alternatives.
        </p>
        <h3 key="h3-9-49" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.3 Java implementation
        </h3>
        <div key="code-9-119" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class TreeIndependentSet {

    static List<Integer>[] tree;

    static int[] dfs(int node, int parent) {

        // dp[0] = best when node is not selected
        // dp[1] = best when node is selected

        int skip = 0;
        int take = 1;

        for (int child : tree[node]) {

            if (child == parent) {
                continue;
            }

            int[] childDP = dfs(child, node);

            skip += Math.max(
                childDP[0],
                childDP[1]
            );

            take += childDP[0];
        }

        return new int[]{skip, take};
    }

    public static void main(String[] args) {

        int n = 5;

        tree = new ArrayList[n + 1];

        for (int i = 1; i <= n; i++) {
            tree[i] = new ArrayList<>();
        }

        int[][] edges = {
            {1, 2},
            {1, 3},
            {2, 4},
            {2, 5}
        };

        for (int[] edge : edges) {

            int u = edge[0];
            int v = edge[1];

            tree[u].add(v);
            tree[v].add(u);
        }

        int[] answer = dfs(1, 0);

        System.out.println(
            Math.max(answer[0], answer[1])
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-9-120" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-9-125" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <p key="p-9-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The optimal selection is nodes 1, 4, and 5.
        </p>
        <h4 key="h4-9-128" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Other Tree DP patterns
        </h4>
        <ul key="ul-9-139" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Subtree size calculation.</li>
          <li>Tree diameter.</li>
          <li>Maximum path sum.</li>
          <li>Rerooting DP.</li>
          <li>DP with parent and child states.</li>
          <li>Counting paths.</li>
          <li>Distance-based tree problems.</li>
          <li>Maximum independent set.</li>
          <li>Minimum vertex cover on a tree.</li>
      </ul>
        <h4 key="h4-9-140" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Tree DP complexity
        </h4>
        <p key="p-9-142" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For many basic tree DP problems, each node and edge is processed a constant number of times:
        </p>
        <p key="p-9-144" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> O(V) \</span>
        </p>
        <p key="p-9-146" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, more advanced states, rerooting, or expensive child-to-child transitions can increase complexity.
        </p>
      </div>
    )
  },
  {
    id: 10,
    title: "10. Greedy Proof Techniques",
    summary: "Mathematical justification: Exchange Arguments, Stays Ahead proofs, Cut Property in MSTs, and proof by contradiction.",
    content: (
      <div className="space-y-4">
        <h3 key="h3-10-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.1 What is a Greedy Algorithm?
        </h3>
        <p key="p-10-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A Greedy algorithm makes the best-looking decision at the current step, hoping that a sequence of these locally optimal decisions leads to a globally optimal solution.
        </p>
        <p key="p-10-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, if you want to attend the maximum number of non-overlapping meetings, you can repeatedly choose the meeting that finishes earliest.
        </p>
        <p key="p-10-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, a locally best decision does not always lead to the global best answer.
        </p>
        <p key="p-10-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That is why Greedy algorithms need mathematical justification.
        </p>
        <h3 key="h3-10-12" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.2 Why is proving a Greedy algorithm important?
        </h3>
        <p key="p-10-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider the following coin denominations:
        </p>
        <div key="code-10-20" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Coins = [1, 3, 4]
Target = 6`}</code>
          </pre>
        </div>
        <p key="p-10-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A greedy strategy that always chooses the largest possible coin selects:
        </p>
        <div key="code-10-26" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 + 1 + 1 = 6`}</code>
          </pre>
        </div>
        <p key="p-10-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That uses three coins.
        </p>
        <p key="p-10-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But the optimal solution is:
        </p>
        <div key="code-10-34" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3 + 3 = 6`}</code>
          </pre>
        </div>
        <p key="p-10-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That uses only two coins.
        </p>
        <p key="p-10-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, the largest-denomination-first strategy is not always optimal for arbitrary coin systems.
        </p>
        <h3 key="h3-10-39" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.3 Greedy proof technique 1: Exchange Argument
        </h3>
        <p key="p-10-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An exchange argument proves that a solution can be transformed into an optimal solution without making it worse.
        </p>
        <p key="p-10-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Activity Selection.
        </p>
        <p key="p-10-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose two possible first activities are:
        </p>
        <div key="code-10-51" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Activity A: 1–4
Activity B: 2–3`}</code>
          </pre>
        </div>
        <p key="p-10-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Activity B finishes earlier.
        </p>
        <p key="p-10-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose an optimal schedule selects A first.
        </p>
        <p key="p-10-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can replace A with B. Since B finishes earlier, any activity that could occur after A can also occur after B.
        </p>
        <p key="p-10-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The schedule remains valid and does not contain fewer activities.
        </p>
        <p key="p-10-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, an optimal solution exists that starts with the earliest-finishing activity.
        </p>
        <p key="p-10-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This justifies the greedy selection.
        </p>
        <h3 key="h3-10-64" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.4 Greedy proof technique 2: Stays Ahead
        </h3>
        <p key="p-10-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A greedy algorithm stays ahead when, after every step, its partial result is at least as good as the corresponding partial result of any competing solution under a suitable measure.
        </p>
        <p key="p-10-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, in earliest-finish-time activity selection, after selecting the first \<span className="font-mono text-orange-300 font-semibold">k\</span> activities, the greedy schedule can be shown to finish no later than a competing valid schedule's \<span className="font-mono text-orange-300 font-semibold">k\</span>-th selected activity.
        </p>
        <p key="p-10-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This leaves at least as much room for future activities.
        </p>
        <h3 key="h3-10-72" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.5 Greedy proof technique 3: Cut Property
        </h3>
        <p key="p-10-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Cut Property is important in Minimum Spanning Tree algorithms.
        </p>
        <p key="p-10-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide graph vertices into two groups.
        </p>
        <p key="p-10-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The minimum-weight edge crossing the cut is safe to include in some Minimum Spanning Tree, provided the edge is chosen according to the standard cut-property conditions.
        </p>
        <p key="p-10-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This principle is used by:
        </p>
        <ul key="ul-10-84" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Kruskal's Algorithm.</li>
          <li>Prim's Algorithm.</li>
      </ul>
        <h3 key="h3-10-85" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.6 Greedy proof technique 4: Contradiction
        </h3>
        <p key="p-10-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Assume that the greedy answer is not optimal.
        </p>
        <p key="p-10-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then compare it with an optimal solution and show that this assumption leads to a contradiction.
        </p>
        <p key="p-10-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For many greedy proofs, the final argument establishes that an optimal solution can be transformed into one that agrees with the greedy choice.
        </p>
        <h4 key="h4-10-93" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          How to validate a Greedy solution
        </h4>
        <p key="p-10-95" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Ask these questions:
        </p>
        <ol key="ol-10-102" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>What is the greedy choice?</li>
          <li>Why is this choice locally safe?</li>
          <li>Can an optimal solution be transformed to include this choice?</li>
          <li>Does the remaining problem preserve the same structure?</li>
          <li>Can I prove optimality for the entire sequence of choices?</li>
      </ol>
        <p key="p-10-103" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Never assume that sorting the input and selecting the first feasible element automatically creates a correct greedy algorithm.
        </p>
      </div>
    )
  },
  {
    id: 11,
    title: "11. Mathematical Problem-Solving",
    summary: "Euclidean GCD, LCM, Sieve of Eratosthenes O(N log log N), modular arithmetic rules, and binary fast exponentiation O(log N).",
    content: (
      <div className="space-y-4">
        <p key="p-11-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematics provides powerful tools for reducing algorithmic complexity.
        </p>
        <p key="p-11-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of examining every possible value, sometimes you can use mathematical properties to calculate the answer directly.
        </p>
        <h3 key="h3-11-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.1 Greatest Common Divisor — GCD
        </h3>
        <p key="p-11-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The GCD of two numbers is the largest positive integer that divides both numbers.
        </p>
        <p key="p-11-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-11-15" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`GCD(24, 36) = 12`}</code>
          </pre>
        </div>
        <p key="p-11-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Euclidean Algorithm uses:
        </p>
        <p key="p-11-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> gcd(a,b)=gcd(b,a\bmod b) \</span>
        </p>
        <p key="p-11-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Continue until the second value becomes zero.
        </p>
        <h4 key="h4-11-22" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java implementation
        </h4>
        <div key="code-11-46" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class GCD {

    static int gcd(int a, int b) {

        while (b != 0) {

            int remainder = a % b;

            a = b;
            b = remainder;
        }

        return Math.abs(a);
    }

    public static void main(String[] args) {

        System.out.println(gcd(24, 36));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time complexity:
        </p>
        <p key="p-11-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> O(\log(\min(a,b))) \</span>
        </p>
        <h3 key="h3-11-51" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.2 Least Common Multiple — LCM
        </h3>
        <p key="p-11-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The LCM is the smallest positive integer divisible by both numbers.
        </p>
        <p key="p-11-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> LCM(a,b)=\frac&#123;|a\times b|&#125;&#123;GCD(a,b)&#125; \</span>
        </p>
        <p key="p-11-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In Java, calculate with <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">long</code> and divide before multiplying when appropriate to reduce overflow risk.
        </p>
        <div key="code-11-82" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`static long lcm(long a, long b) {

    if (a == 0 || b == 0) {
        return 0;
    }

    return Math.abs((a / gcdLong(a, b)) * b);
}

static long gcdLong(long a, long b) {

    while (b != 0) {

        long temp = a % b;

        a = b;
        b = temp;
    }

    return Math.abs(a);
}`}</code>
          </pre>
        </div>
        <h3 key="h3-11-83" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.3 Prime Number Sieve
        </h3>
        <p key="p-11-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Sieve of Eratosthenes finds every prime number up to a specified limit.
        </p>
        <p key="p-11-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of checking each number independently, mark the multiples of every prime as composite.
        </p>
        <div key="code-11-122" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class PrimeSieve {

    static boolean[] sieve(int n) {

        boolean[] prime = new boolean[n + 1];

        Arrays.fill(prime, true);

        if (n >= 0) {
            prime[0] = false;
        }

        if (n >= 1) {
            prime[1] = false;
        }

        for (int i = 2; i <= n / i; i++) {

            if (prime[i]) {

                for (int j = i * i; j <= n; j += i) {
                    prime[j] = false;
                }
            }
        }

        return prime;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-11-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> O(n\log\log n) \</span>
        </p>
        <h3 key="h3-11-127" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.4 Modular Arithmetic
        </h3>
        <p key="p-11-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Modular arithmetic is used when numbers become extremely large.
        </p>
        <p key="p-11-131" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of storing the exact result, we store its remainder after division by a modulus.
        </p>
        <p key="p-11-133" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <p key="p-11-135" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> (17+9)\bmod 10=6 \</span>
        </p>
        <p key="p-11-137" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important properties:
        </p>
        <p key="p-11-139" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> (a+b)\bmod m = ((a\bmod m)+(b\bmod m))\bmod m \</span>
        </p>
        <p key="p-11-141" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> (a\times b)\bmod m = ((a\bmod m)(b\bmod m))\bmod m \</span>
        </p>
        <p key="p-11-143" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common modulus in programming problems is:
        </p>
        <p key="p-11-145" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> 10^9+7 \</span>
        </p>
        <p key="p-11-147" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For multiplication, using <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">long</code> is important when intermediate products may exceed the range of <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">int</code>.
        </p>
        <h3 key="h3-11-149" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.5 Fast Exponentiation
        </h3>
        <p key="p-11-151" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculating \<span className="font-mono text-orange-300 font-semibold">a^b\</span> by multiplying \<span className="font-mono text-orange-300 font-semibold">a\</span> exactly \<span className="font-mono text-orange-300 font-semibold">b\</span> times takes \<span className="font-mono text-orange-300 font-semibold">O(b)\</span> multiplications.
        </p>
        <p key="p-11-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary Exponentiation reduces this to \<span className="font-mono text-orange-300 font-semibold">O(\log b)\</span>.
        </p>
        <p key="p-11-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The key idea:
        </p>
        <p key="p-11-157" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> a^&#123;2k&#125;=(a^k)^2 \</span>
        </p>
        <p key="p-11-159" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> a^&#123;2k+1&#125;=a(a^k)^2 \</span>
        </p>
        <h4 key="h4-11-161" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java implementation
        </h4>
        <div key="code-11-190" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class FastPower {

    static long power(long base, long exponent) {

        long result = 1;

        while (exponent > 0) {

            if ((exponent & 1) == 1) {
                result *= base;
            }

            base *= base;

            exponent >>= 1;
        }

        return result;
    }

    public static void main(String[] args) {

        System.out.println(power(2, 10));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-191" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-11-196" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1024`}</code>
          </pre>
        </div>
        <p key="p-11-197" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For very large numbers, use modular exponentiation to prevent overflow.
        </p>
        <h4 key="h4-11-199" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Other mathematical patterns
        </h4>
        <ul key="ul-11-212" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Prime factorization.</li>
          <li>Divisor counting.</li>
          <li>Combinatorics.</li>
          <li>Permutations and combinations.</li>
          <li>Modular inverse.</li>
          <li>Fermat's Little Theorem.</li>
          <li>Pigeonhole Principle.</li>
          <li>Inclusion–Exclusion Principle.</li>
          <li>Bitwise mathematics.</li>
          <li>Mathematical induction.</li>
          <li>Number representation and digit properties.</li>
      </ul>
      </div>
    )
  },
  {
    id: 12,
    title: "12. Advanced Array Patterns",
    summary: "Difference Arrays for O(1) range updates, Coordinate Compression, Prefix XOR, and Sweep Line interval event sorting.",
    content: (
      <div className="space-y-4">
        <p key="p-12-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced array problems are often solved by combining arrays with other data structures and algorithmic techniques.
        </p>
        <h3 key="h3-12-4" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.1 Difference Arrays
        </h3>
        <p key="p-12-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A difference array efficiently handles multiple range updates.
        </p>
        <p key="p-12-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you have:
        </p>
        <div key="code-12-13" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array = [0, 0, 0, 0, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You want to add 5 to all elements from index 1 to 3.
        </p>
        <p key="p-12-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A direct update takes \<span className="font-mono text-orange-300 font-semibold">O(n)\</span> per operation.
        </p>
        <p key="p-12-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead, use a difference array:
        </p>
        <p key="p-12-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a range update \<span className="font-mono text-orange-300 font-semibold">[l,r]\</span> adding \<span className="font-mono text-orange-300 font-semibold">x\</span>:
        </p>
        <div key="code-12-26" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`diff[l] += x;
diff[r + 1] -= x;`}</code>
          </pre>
        </div>
        <p key="p-12-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After processing all updates, take the prefix sum of <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">diff</code> to recover the resulting array.
        </p>
        <p key="p-12-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For the above update:
        </p>
        <div key="code-12-35" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Difference: [0, 5, 0, 0, -5, 0]
Prefix:     [0, 5, 5, 5, 0, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The original five array positions become:
        </p>
        <div key="code-12-41" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 5, 5, 5, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The extra position allows the implementation to handle <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">r + 1</code> conveniently.
        </p>
        <p key="p-12-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This technique is useful when there are many range updates and the final array is needed afterward.
        </p>
        <h3 key="h3-12-46" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.2 Coordinate Compression
        </h3>
        <p key="p-12-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Coordinate Compression replaces large or sparse values with smaller consecutive ranks while preserving order.
        </p>
        <p key="p-12-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-12-59" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Original values:
[1000000, 20, 500, 20]

Compressed values:
[2, 0, 1, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why is it useful?
        </p>
        <p key="p-12-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose array elements contain very large coordinates, but you need a Fenwick Tree or Segment Tree indexed by their relative order.
        </p>
        <p key="p-12-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You do not need an array of size one million or one billion. You only need enough positions for the distinct values.
        </p>
        <p key="p-12-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is also helpful when implementing offline queries.
        </p>
        <h3 key="h3-12-68" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.3 Prefix Sum and Prefix XOR
        </h3>
        <p key="p-12-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prefix sums allow fast range-sum queries.
        </p>
        <p key="p-12-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> prefix[i]=a_0+a_1+\cdots+a_i \</span>
        </p>
        <p key="p-12-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Range sum from \<span className="font-mono text-orange-300 font-semibold">l\</span> to \<span className="font-mono text-orange-300 font-semibold">r\</span>:
        </p>
        <p key="p-12-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> sum(l,r)=prefix[r]-prefix[l-1] \</span>
        </p>
        <p key="p-12-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For XOR, the same principle works because XOR is its own inverse:
        </p>
        <p key="p-12-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> xor(l,r)=prefixXor[r]\oplus prefixXor[l-1] \</span>
        </p>
        <p key="p-12-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These techniques transform many repeated range calculations into constant-time queries after preprocessing.
        </p>
        <h3 key="h3-12-84" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.4 Sweep Line Pattern
        </h3>
        <p key="p-12-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Sweep Line technique processes events in sorted order.
        </p>
        <p key="p-12-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Imagine a collection of time intervals:
        </p>
        <div key="code-12-95" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 5]
[2, 7]
[4, 8]`}</code>
          </pre>
        </div>
        <p key="p-12-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To find the maximum number of overlapping intervals:
        </p>
        <ol key="ol-12-103" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Create a start event for each interval.</li>
          <li>Create an end event for each interval.</li>
          <li>Sort the events.</li>
          <li>Move through them while maintaining the active count.</li>
          <li>Track the maximum count.</li>
      </ol>
        <p key="p-12-104" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This transforms an interval problem into an ordered event-processing problem.
        </p>
        <p key="p-12-106" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For endpoint rules, decide carefully whether intervals are open or closed. If one interval ends at the same time another begins, the event ordering can affect the answer.
        </p>
        <h3 key="h3-12-108" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.5 Other advanced array patterns
        </h3>
        <div key="table-12-123" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Pattern</th>
                <th className="p-3 font-semibold">Common application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Two Pointers</td>
                  <td className="p-3">Pair or triplet problems in sorted arrays</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sliding Window</td>
                  <td className="p-3">Subarray or substring constraints</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Prefix Sum</td>
                  <td className="p-3">Range sum and subarray sum</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Difference Array</td>
                  <td className="p-3">Many range updates</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Prefix XOR</td>
                  <td className="p-3">Range XOR queries</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Kadane's Algorithm</td>
                  <td className="p-3">Maximum subarray sum</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Cyclic Sort</td>
                  <td className="p-3">Arrays containing values in a known index range</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Coordinate Compression</td>
                  <td className="p-3">Sparse large values</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sweep Line</td>
                  <td className="p-3">Interval overlap and event problems</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Binary Search</td>
                  <td className="p-3">Search in sorted or monotonic structures</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Partitioning</td>
                  <td className="p-3">Quick Sort and selection algorithms</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "13. Offline Query Processing",
    summary: "Reordering batch queries for global optimization, Mo's Algorithm with sqrt-decomposition blocks in O((N + Q) sqrt(N)).",
    content: (
      <div className="space-y-4">
        <h3 key="h3-13-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.1 What are offline queries?
        </h3>
        <p key="p-13-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An offline query problem allows us to know all queries in advance before answering them.
        </p>
        <p key="p-13-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Rather than answering each query immediately in the order it arrives, we can reorder the queries to make processing faster.
        </p>
        <p key="p-13-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is important because the order in which a problem presents queries may not be the most efficient order in which to process them.
        </p>
        <h4 key="h4-13-10" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Online versus Offline Processing
        </h4>
        <div key="table-13-18" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Online processing</th>
                <th className="p-3 font-semibold">Offline processing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Answer queries as they arrive</td>
                  <td className="p-3">Know all queries before processing</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Usually preserves query order</td>
                  <td className="p-3">Can reorder queries</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Does not generally depend on future queries</td>
                  <td className="p-3">Can use future-query information</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Useful for interactive systems</td>
                  <td className="p-3">Useful for batch query problems</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-13-19" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.2 Example: Range Sum Queries
        </h3>
        <p key="p-13-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you have an array and several range-sum queries.
        </p>
        <div key="code-13-26" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array = [2, 4, 1, 7, 3]`}</code>
          </pre>
        </div>
        <p key="p-13-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Queries:
        </p>
        <div key="code-13-34" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Q1: Sum from index 1 to 3
Q2: Sum from index 0 to 4
Q3: Sum from index 2 to 4`}</code>
          </pre>
        </div>
        <p key="p-13-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One solution is to calculate prefix sums first.
        </p>
        <p key="p-13-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then every query can be answered in \<span className="font-mono text-orange-300 font-semibold">O(1)\</span>.
        </p>
        <p key="p-13-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a form of preprocessing that becomes possible because all queries are known.
        </p>
        <h3 key="h3-13-41" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.3 Mo's Algorithm
        </h3>
        <p key="p-13-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mo's Algorithm is an offline technique for answering many range queries.
        </p>
        <p key="p-13-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is especially useful when:
        </p>
        <ul key="ul-13-51" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Queries ask about subarray ranges.</li>
          <li>A range can be expanded or contracted efficiently.</li>
          <li>A direct solution is too expensive.</li>
          <li>A Segment Tree or Fenwick Tree is not suitable for the required aggregate.</li>
      </ul>
        <p key="p-13-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It sorts queries into blocks based on the left endpoint and orders queries by their right endpoints.
        </p>
        <p key="p-13-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm maintains a current range \<span className="font-mono text-orange-300 font-semibold">[L,R]\</span>. To move from one query to another, it adds or removes elements from the range.
        </p>
        <p key="p-13-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, if one query asks for:
        </p>
        <div key="code-13-61" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 6]`}</code>
          </pre>
        </div>
        <p key="p-13-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          and the next asks for:
        </p>
        <div key="code-13-67" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[3, 8]`}</code>
          </pre>
        </div>
        <p key="p-13-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm only needs to:
        </p>
        <ul key="ul-13-72" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Remove index 2.</li>
          <li>Add indices 7 and 8.</li>
      </ul>
        <p key="p-13-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It does not need to recalculate the entire range.
        </p>
        <p key="p-13-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common query ordering is:
        </p>
        <p key="p-13-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> block(l)=\left\lfloor\frac&#123;l&#125;&#123;\sqrt&#123;n&#125;&#125;\right\rfloor \</span>
        </p>
        <p key="p-13-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sort primarily by the left block, and secondarily by the right endpoint.
        </p>
        <h4 key="h4-13-81" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Common applications
        </h4>
        <ul key="ul-13-88" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Count distinct elements in a range.</li>
          <li>Frequency-based queries.</li>
          <li>Sum of frequencies.</li>
          <li>Number of values satisfying certain frequency conditions.</li>
          <li>Other queries that support efficient add/remove operations.</li>
      </ul>
        <p key="p-13-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A typical complexity with standard block ordering is approximately \<span className="font-mono text-orange-300 font-semibold">O((n+q)\sqrt n)\</span> for suitable query-maintenance operations, with the precise cost depending on the number of queries and the ordering strategy.
        </p>
        <h3 key="h3-13-91" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.4 Other Offline Query Techniques
        </h3>
        <p key="p-13-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Sort Queries by Value:</strong> Sort elements and queries by a common threshold, then process incrementally.
        </p>
        <p key="p-13-95" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">DSU Offline Connectivity:</strong> Process graph operations or connectivity questions in a suitable reordered sequence, especially when reverse processing is possible.
        </p>
        <p key="p-13-97" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Coordinate Compression:</strong> Compress all values appearing in queries and updates before applying a Fenwick Tree or Segment Tree.
        </p>
        <p key="p-13-99" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Sweep Line:</strong> Sort query events and array or interval events by position, then answer queries while scanning.
        </p>
        <h4 key="h4-13-101" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          When to consider offline processing
        </h4>
        <p key="p-13-103" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Look for statements such as:
        </p>
        <ul key="ul-13-110" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>All queries are given in advance.</li>
          <li>Answer several range queries.</li>
          <li>Queries can be processed in any order.</li>
          <li>The input contains many queries with a common structure.</li>
          <li>Repeatedly recomputing answers would be too expensive.</li>
      </ul>
      </div>
    )
  },
  {
    id: 14,
    title: "14. Competitive Programming Fundamentals",
    summary: "Time limits, Fast I/O (BufferedReader + StringTokenizer), 64-bit integer overflow protection, and testing discipline.",
    content: (
      <div className="space-y-4">
        <p key="p-14-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Competitive Programming is a problem-solving environment in which you write programs that must satisfy correctness, runtime, and memory constraints.
        </p>
        <p key="p-14-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It combines DSA, mathematical reasoning, implementation discipline, and complexity analysis.
        </p>
        <h3 key="h3-14-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.1 Understand the input constraints first
        </h3>
        <p key="p-14-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before designing an algorithm, examine:
        </p>
        <ul key="ul-14-18" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Number of test cases.</li>
          <li>Maximum input size.</li>
          <li>Value ranges.</li>
          <li>Time limit.</li>
          <li>Memory limit.</li>
          <li>Whether values can be negative.</li>
          <li>Whether duplicate elements are allowed.</li>
          <li>Whether indices start at zero or one.</li>
      </ul>
        <p key="p-14-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These details influence which algorithms are feasible.
        </p>
        <h3 key="h3-14-21" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.2 Time complexity awareness
        </h3>
        <p key="p-14-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The following table gives rough guidance, not absolute limits. Actual feasibility depends on time limits, language, implementation, constants, and the number of test cases.
        </p>
        <div key="table-14-34" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Input size</th>
                <th className="p-3 font-semibold">Commonly considered approaches</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">n \leq 10\</span></td>
                  <td className="p-3">Exhaustive search, permutations</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">n \leq 20\</span></td>
                  <td className="p-3">Bitmask DP, subset enumeration</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">n \leq 100\</span></td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(n^3)\</span> may be feasible</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">n \leq 1,000\</span></td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(n^2)\</span> may be feasible</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">n \leq 100,000\</span></td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(n\log n)\</span> or \<span className="font-mono text-orange-300 font-semibold">O(n)\</span></td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">n \leq 1,000,000\</span></td>
                  <td className="p-3">Usually seek linear or near-linear methods</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Very large numeric ranges</td>
                  <td className="p-3">\<span className="font-mono text-orange-300 font-semibold">O(\log n)\</span>, mathematical methods, or binary search</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-14-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Always calculate the expected number of operations rather than blindly following this table.
        </p>
        <h3 key="h3-14-37" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.3 Fast input and output in Java
        </h3>
        <p key="p-14-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java's <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">Scanner</code> is convenient, but can be slow for very large inputs.
        </p>
        <p key="p-14-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Competitive programming often uses <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">BufferedReader</code> and <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">StringTokenizer</code>.
        </p>
        <div key="code-14-86" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args)
        throws IOException {

        BufferedReader br = new BufferedReader(
            new InputStreamReader(System.in)
        );

        StringTokenizer st =
            new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());

        int[] arr = new int[n];

        int index = 0;

        while (index < n) {

            if (st == null || !st.hasMoreTokens()) {
                st = new StringTokenizer(br.readLine());
            }

            while (st.hasMoreTokens() && index < n) {

                arr[index++] =
                    Integer.parseInt(st.nextToken());
            }
        }

        StringBuilder output = new StringBuilder();

        output.append(Arrays.toString(arr));

        System.out.print(output);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In real contests, input-reading logic must account for the exact problem format, including line boundaries and empty lines.
        </p>
        <h3 key="h3-14-89" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.4 Integer Overflow
        </h3>
        <p key="p-14-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java's <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">int</code> has a maximum value of approximately 2.1 billion.
        </p>
        <p key="p-14-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When calculations may exceed that limit, use <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">long</code>.
        </p>
        <div key="code-14-105" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int a = 1_000_000;
int b = 1_000_000;

// Potentially overflows int
// int result = a * b;

// Safe for this multiplication
long result = (long) a * b;`}</code>
          </pre>
        </div>
        <p key="p-14-106" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice that casting must happen before multiplication.
        </p>
        <h3 key="h3-14-108" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.5 Essential competitive programming habits
        </h3>
        <ul key="ul-14-122" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Read the complete problem statement.</li>
          <li>Identify input and output formats.</li>
          <li>Analyze constraints.</li>
          <li>Consider edge cases.</li>
          <li>Avoid unnecessary object creation in performance-critical code.</li>
          <li>Use appropriate primitive types.</li>
          <li>Handle multiple test cases correctly.</li>
          <li>Check array and string boundaries.</li>
          <li>Avoid assumptions about input ordering.</li>
          <li>Test your algorithm with small cases.</li>
          <li>Use a proof or invariant to establish correctness.</li>
          <li>Calculate both time and space complexity.</li>
      </ul>
      </div>
    )
  },
  {
    id: 15,
    title: "15. Problem Constraints Analysis",
    summary: "Reading algorithmic blueprints from constraints (N <= 20 vs 10^5, coordinate ranges, and memory byte calculations).",
    content: (
      <div className="space-y-4">
        <p key="p-15-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Constraints are not just additional information. They provide clues about the expected algorithm.
        </p>
        <p key="p-15-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose a problem states:
        </p>
        <div key="code-15-9" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 <= n <= 100000`}</code>
          </pre>
        </div>
        <p key="p-15-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This suggests that a quadratic solution might be too slow for large inputs.
        </p>
        <p key="p-15-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But if the constraints are:
        </p>
        <div key="code-15-17" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 <= n <= 20`}</code>
          </pre>
        </div>
        <p key="p-15-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An exponential approach such as subset enumeration may be perfectly reasonable.
        </p>
        <h3 key="h3-15-20" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.1 Analyze numeric ranges
        </h3>
        <p key="p-15-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-15-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 <= a[i] <= 10^9`}</code>
          </pre>
        </div>
        <p key="p-15-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An array of size \<span className="font-mono text-orange-300 font-semibold">10^9\</span> is not practical.
        </p>
        <p key="p-15-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You may need:
        </p>
        <ul key="ul-15-37" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>HashMap.</li>
          <li>Coordinate compression.</li>
          <li>Sorting.</li>
          <li>Binary Search.</li>
          <li>A mathematical approach.</li>
      </ul>
        <p key="p-15-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now consider:
        </p>
        <div key="code-15-43" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`-10^9 <= a[i] <= 10^9`}</code>
          </pre>
        </div>
        <p key="p-15-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You must also handle negative values.
        </p>
        <p key="p-15-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This can affect:
        </p>
        <ul key="ul-15-53" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Two-pointer approaches.</li>
          <li>Prefix sums.</li>
          <li>Greedy assumptions.</li>
          <li>Binary search feasibility.</li>
          <li>Modulo operations.</li>
      </ul>
        <h3 key="h3-15-54" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.2 Constraints reveal algorithmic possibilities
        </h3>
        <div key="table-15-68" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Constraint clue</th>
                <th className="p-3 font-semibold">Possible direction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Very small \<span className="font-mono text-orange-300 font-semibold">n\</span></td>
                  <td className="p-3">Backtracking, brute force, bitmask DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Large \<span className="font-mono text-orange-300 font-semibold">n\</span>, small value range</td>
                  <td className="p-3">Frequency counting, counting arrays</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Large values, few distinct elements</td>
                  <td className="p-3">Hashing, compression</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sorted input</td>
                  <td className="p-3">Binary Search, two pointers</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Many range queries</td>
                  <td className="p-3">Prefix sums, Fenwick Tree, Segment Tree, Mo's Algorithm</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Many connectivity queries</td>
                  <td className="p-3">DSU</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Tree with up to \<span className="font-mono text-orange-300 font-semibold">10^5\</span> nodes</td>
                  <td className="p-3">DFS, BFS, tree DP; consider recursion depth</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Unweighted graph</td>
                  <td className="p-3">BFS</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Non-negative weighted graph</td>
                  <td className="p-3">Dijkstra</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Optimization with monotonic feasibility</td>
                  <td className="p-3">Binary Search on Answer</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-15-69" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.3 Watch for integer overflow
        </h3>
        <p key="p-15-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-15-79" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int a = 100000;
int b = 100000;

int product = a * b;`}</code>
          </pre>
        </div>
        <p key="p-15-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Even though both operands fit into <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">int</code>, their product does not.
        </p>
        <p key="p-15-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use:
        </p>
        <div key="code-15-87" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`long product = (long) a * b;`}</code>
          </pre>
        </div>
        <p key="p-15-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Also check:
        </p>
        <ul key="ul-15-97" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Sum of array elements.</li>
          <li>Prefix sums.</li>
          <li>Products of two values.</li>
          <li>Distance calculations.</li>
          <li>Squared distances.</li>
          <li>Number of combinations.</li>
          <li>Factorial and power calculations.</li>
      </ul>
        <p key="p-15-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A solution that is logically correct but overflows will still produce incorrect results.
        </p>
        <h3 key="h3-15-100" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.4 Consider memory constraints
        </h3>
        <p key="p-15-102" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For \<span className="font-mono text-orange-300 font-semibold">n\</span> elements:
        </p>
        <ul key="ul-15-109" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">int[n]</code> stores approximately \<span className="font-mono text-orange-300 font-semibold">4n\</span> bytes for the primitive array data.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">long[n]</code> stores approximately \<span className="font-mono text-orange-300 font-semibold">8n\</span> bytes.</li>
          <li><code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">boolean[][]</code> and object-based structures have additional object overhead.</li>
          <li>Large recursive searches require stack space.</li>
          <li>Adjacency lists and hash maps require more memory than simple primitive arrays.</li>
      </ul>
        <p key="p-15-110" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The actual JVM memory usage includes additional overhead beyond these basic estimates.
        </p>
      </div>
    )
  },
  {
    id: 16,
    title: "16. Selecting the Right Data Structure",
    summary: "Comprehensive selection matrix: HashMap vs TreeMap, Stack vs Deque, Heap vs Sorting, Array vs LinkedList.",
    content: (
      <div className="space-y-4">
        <p key="p-16-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A data structure controls how information is stored, accessed, inserted, deleted, and processed.
        </p>
        <p key="p-16-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The right data structure can turn an inefficient solution into an efficient one.
        </p>
        <h3 key="h3-16-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.1 Data structure selection table
        </h3>
        <div key="table-16-27" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Requirement</th>
                <th className="p-3 font-semibold">Recommended data structure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Fast index-based access</td>
                  <td className="p-3">Array / ArrayList</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Fast key-value lookup</td>
                  <td className="p-3">HashMap</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Store unique elements</td>
                  <td className="p-3">HashSet</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Maintain insertion order</td>
                  <td className="p-3">LinkedHashMap / LinkedHashSet</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sorted unique values</td>
                  <td className="p-3">TreeSet</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sorted key-value pairs</td>
                  <td className="p-3">TreeMap</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Last In, First Out</td>
                  <td className="p-3">Stack / Deque</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">First In, First Out</td>
                  <td className="p-3">Queue</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Efficient add/remove at both ends</td>
                  <td className="p-3">ArrayDeque</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Highest or lowest priority first</td>
                  <td className="p-3">PriorityQueue</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Prefix-based string search</td>
                  <td className="p-3">Trie</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Range sum with updates</td>
                  <td className="p-3">Fenwick Tree</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">General range queries and updates</td>
                  <td className="p-3">Segment Tree</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Connectivity groups</td>
                  <td className="p-3">DSU</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Graph relationships</td>
                  <td className="p-3">Adjacency List</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Small dense graph</td>
                  <td className="p-3">Adjacency Matrix</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need repeated minimum/maximum</td>
                  <td className="p-3">Heap / PriorityQueue</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-16-28" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.2 Important comparisons
        </h3>
        <h4 key="h4-16-30" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          HashMap versus TreeMap
        </h4>
        <p key="p-16-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          HashMap provides expected \<span className="font-mono text-orange-300 font-semibold">O(1)\</span> lookup, insertion, and deletion under normal hashing assumptions.
        </p>
        <p key="p-16-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          TreeMap maintains sorted keys and provides \<span className="font-mono text-orange-300 font-semibold">O(\log n)\</span> lookup, insertion, and deletion.
        </p>
        <p key="p-16-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Choose:
        </p>
        <ul key="ul-16-40" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>HashMap when fast key-based access matters.</li>
          <li>TreeMap when you need sorted keys, range navigation, or ordered iteration.</li>
      </ul>
        <h4 key="h4-16-41" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Stack versus Queue
        </h4>
        <p key="p-16-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Stack:
        </p>
        <div key="code-16-48" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Last In, First Out`}</code>
          </pre>
        </div>
        <p key="p-16-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Queue:
        </p>
        <div key="code-16-54" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`First In, First Out`}</code>
          </pre>
        </div>
        <p key="p-16-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use a stack for:
        </p>
        <ul key="ul-16-61" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Undo operations.</li>
          <li>DFS.</li>
          <li>Parentheses validation.</li>
          <li>Monotonic-stack problems.</li>
      </ul>
        <p key="p-16-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use a queue for:
        </p>
        <ul key="ul-16-68" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>BFS.</li>
          <li>Scheduling.</li>
          <li>Level-order traversal.</li>
          <li>Processing tasks in arrival order.</li>
      </ul>
        <h4 key="h4-16-69" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Heap versus Sorting
        </h4>
        <p key="p-16-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sorting the entire collection costs \<span className="font-mono text-orange-300 font-semibold">O(n\log n)\</span>.
        </p>
        <p key="p-16-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A PriorityQueue is preferable when you repeatedly need the smallest or largest item, especially if you only need a limited number of elements.
        </p>
        <p key="p-16-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, finding the smallest \<span className="font-mono text-orange-300 font-semibold">k\</span> elements can use a max-heap of size \<span className="font-mono text-orange-300 font-semibold">k\</span>, giving \<span className="font-mono text-orange-300 font-semibold">O(n\log k)\</span> time.
        </p>
        <h4 key="h4-16-77" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Array versus Linked List
        </h4>
        <p key="p-16-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Arrays provide efficient random access.
        </p>
        <p key="p-16-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Linked lists provide efficient local insertion and deletion when you already have the relevant node, but accessing an arbitrary position takes linear time.
        </p>
        <p key="p-16-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In Java, <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">ArrayList</code> is usually a strong default for indexed collections, while <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">LinkedList</code> is useful for particular linked-list operations and deque behavior. For stack and queue use cases, <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">ArrayDeque</code> is generally a better default.
        </p>
      </div>
    )
  },
  {
    id: 17,
    title: "17. Selecting the Right Algorithm",
    summary: "Decision-making framework: 9-step problem-solving workflow from understanding to bottleneck detection and verification.",
    content: (
      <div className="space-y-4">
        <p key="p-17-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is the central skill of the module.
        </p>
        <p key="p-17-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A problem may have several possible solutions. Your job is to identify the approach that satisfies correctness, time complexity, and memory constraints.
        </p>
        <h3 key="h3-17-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.1 Algorithm selection guide
        </h3>
        <div key="table-17-24" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem characteristics</th>
                <th className="p-3 font-semibold">Algorithmic direction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need to explore every valid combination</td>
                  <td className="p-3">Backtracking</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need the best solution with a strong pruning bound</td>
                  <td className="p-3">Branch and Bound</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Problem can be divided into independent smaller parts</td>
                  <td className="p-3">Divide and Conquer</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Feasibility changes monotonically with an answer</td>
                  <td className="p-3">Binary Search on Answer</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need next/previous greater or smaller elements</td>
                  <td className="p-3">Monotonic Stack</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need minimum/maximum of moving windows</td>
                  <td className="p-3">Monotonic Queue</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need shortest path in an unweighted graph</td>
                  <td className="p-3">BFS</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need shortest path with non-negative weights</td>
                  <td className="p-3">Dijkstra</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need ordering of dependencies</td>
                  <td className="p-3">Topological Sort</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need repeated connectivity operations</td>
                  <td className="p-3">DSU</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need repeated overlapping subproblems</td>
                  <td className="p-3">Dynamic Programming</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need an optimal solution using locally safe decisions</td>
                  <td className="p-3">Greedy</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need multiple range queries</td>
                  <td className="p-3">Prefix Sum, Fenwick Tree, Segment Tree, Mo's Algorithm</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Need mathematical counting or very large calculations</td>
                  <td className="p-3">Number Theory / Combinatorics</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-17-25" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.2 A decision-making framework
        </h3>
        <p key="p-17-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When you receive an unfamiliar problem, follow this sequence:
        </p>
        <h3 key="h3-17-29" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Problem-solving workflow
        </h3>
        <ol key="ol-17-32" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Understand the problem</strong></li>
      </ol>
        <p key="p-17-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Identify the input, expected output, constraints, and what exactly must be calculated.
        </p>
        <ol key="ol-17-35" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Identify the problem pattern</strong></li>
      </ol>
        <p key="p-17-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Is it a searching, sorting, graph, tree, array, string, optimization, or counting problem?
        </p>
        <ol key="ol-17-38" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Start with a simple approach</strong></li>
      </ol>
        <p key="p-17-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Develop a brute-force or straightforward solution to understand the problem.
        </p>
        <ol key="ol-17-41" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Analyze complexity</strong></li>
      </ol>
        <p key="p-17-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate how much time and memory the initial solution requires.
        </p>
        <ol key="ol-17-44" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Find the bottleneck</strong></li>
      </ol>
        <p key="p-17-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Look for repeated computation, unnecessary traversal, expensive searching, or repeated sorting.
        </p>
        <ol key="ol-17-47" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Choose the optimization</strong></li>
      </ol>
        <p key="p-17-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider hashing, two pointers, sliding windows, binary search, DP, Greedy, trees, heaps, or graph algorithms.
        </p>
        <ol key="ol-17-50" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Prove correctness</strong></li>
      </ol>
        <p key="p-17-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use an invariant, induction, exchange argument, or reasoning about state transitions.
        </p>
        <ol key="ol-17-53" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Implement and test</strong></li>
      </ol>
        <p key="p-17-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Test normal inputs, edge cases, minimum constraints, maximum constraints, and unusual values.
        </p>
        <ol key="ol-17-56" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Recalculate complexity</strong></li>
      </ol>
        <p key="p-17-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Verify that the optimized solution meets both time and memory requirements.
        </p>
      </div>
    )
  },
  {
    id: 18,
    title: "18. Putting Multiple Patterns Together",
    summary: "Master multi-pattern fusions: Binary Search + Greedy, Graph + BFS + Hashing, DP + Bitmasking, and Tree + DFS + DP.",
    content: (
      <div className="space-y-4">
        <p key="p-18-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Real advanced problems often require more than one technique.
        </p>
        <p key="p-18-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here are some important combinations.
        </p>
        <h3 key="h3-18-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.1 Binary Search + Greedy
        </h3>
        <p key="p-18-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Problem:</strong> Aggressive Cows.
        </p>
        <p key="p-18-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You want to place cows in stalls such that the minimum distance between any two cows is as large as possible.
        </p>
        <p key="p-18-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Approach:
        </p>
        <ol key="ol-18-19" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Sort the stall positions.</li>
          <li>Binary-search a candidate minimum distance.</li>
          <li>Use Greedy to place cows as early as possible while maintaining that distance.</li>
          <li>If all cows can be placed, try a larger distance.</li>
          <li>Otherwise, try a smaller distance.</li>
      </ol>
        <p key="p-18-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The binary search handles the answer range. Greedy checks feasibility.
        </p>
        <h3 key="h3-18-22" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.2 Graph + BFS + Hashing
        </h3>
        <p key="p-18-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Problem:</strong> Shortest transformation from one word to another by changing one character at a time.
        </p>
        <p key="p-18-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Approach:
        </p>
        <ol key="ol-18-33" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Store available words in a HashSet.</li>
          <li>Use BFS to explore transformations level by level.</li>
          <li>Generate neighboring words.</li>
          <li>Remove words when they are first visited.</li>
          <li>Stop when the target is reached.</li>
      </ol>
        <p key="p-18-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          BFS finds the shortest number of transformations because each change has equal cost.
        </p>
        <h3 key="h3-18-36" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.3 DP + Bitmasking
        </h3>
        <p key="p-18-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Problem:</strong> Travelling Salesperson Problem.
        </p>
        <p key="p-18-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You need to visit every city exactly once and return to the starting city, minimizing total cost.
        </p>
        <p key="p-18-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <p key="p-18-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> dp[mask][i] \</span>
        </p>
        <p key="p-18-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          as the minimum travel cost for visiting the cities contained in <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">mask</code> and finishing at city <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">i</code>.
        </p>
        <p key="p-18-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The mask represents the visited cities.
        </p>
        <p key="p-18-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          From the current state, try visiting each unvisited city.
        </p>
        <p key="p-18-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A standard subset-DP solution takes:
        </p>
        <p key="p-18-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> O(n^2 2^n) \</span>
        </p>
        <p key="p-18-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          time and:
        </p>
        <p key="p-18-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-orange-300 font-semibold"> O(n2^n) \</span>
        </p>
        <p key="p-18-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          space.
        </p>
        <p key="p-18-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is practical only for relatively small \<span className="font-mono text-orange-300 font-semibold">n\</span>.
        </p>
        <h3 key="h3-18-64" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.4 Monotonic Stack + Prefix Sum
        </h3>
        <p key="p-18-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Certain problems combine prefix sums with monotonic stacks to identify the largest subarray satisfying a condition.
        </p>
        <p key="p-18-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples include advanced maximum-subarray and range-contribution problems.
        </p>
        <p key="p-18-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You might use:
        </p>
        <ul key="ul-18-75" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Prefix sums for quick range calculations.</li>
          <li>Monotonic stacks for nearest boundaries.</li>
          <li>Sorting or indexing for organizing candidates.</li>
      </ul>
        <h3 key="h3-18-76" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.5 Tree + DFS + DP
        </h3>
        <p key="p-18-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP uses DFS to compute results from children before processing the parent.
        </p>
        <p key="p-18-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples include:
        </p>
        <ul key="ul-18-87" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Maximum independent set.</li>
          <li>Tree diameter.</li>
          <li>Maximum path sum.</li>
          <li>Tree matching.</li>
          <li>Subtree aggregation.</li>
      </ul>
        <p key="p-18-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recognizing the relationship between the current node and its children is the key.
        </p>
      </div>
    )
  },
  {
    id: 19,
    title: "19. Common Mistakes in Advanced Problem Solving",
    summary: "11 critical traps: unproven greedy, non-monotonic binary search, improper backtracking restoration, and stack overflow.",
    content: (
      <div className="space-y-4">
        <p key="p-19-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These mistakes often cause incorrect solutions even when the overall idea is reasonable.
        </p>
        <div key="table-19-17" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Mistake</th>
                <th className="p-3 font-semibold">Why it fails</th>
                <th className="p-3 font-semibold">Better approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Applying Greedy without proof</td>
                  <td className="p-3">A local choice may prevent the global optimum</td>
                  <td className="p-3">Prove the greedy-choice property</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Using DP without defining the state</td>
                  <td className="p-3">Transitions become unclear or incomplete</td>
                  <td className="p-3">Write the state meaning first</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Using binary search without monotonicity</td>
                  <td className="p-3">A discarded half may contain the answer</td>
                  <td className="p-3">Prove feasibility is monotonic</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Incorrect backtracking restoration</td>
                  <td className="p-3">One branch affects another</td>
                  <td className="p-3">Undo every mutable decision</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Using Dijkstra with negative edges</td>
                  <td className="p-3">Its assumptions are violated</td>
                  <td className="p-3">Consider Bellman–Ford or another suitable algorithm</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Wrong monotonic-stack comparison</td>
                  <td className="p-3">Equal values may be handled incorrectly</td>
                  <td className="p-3">Decide strict versus non-strict behavior</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Storing values instead of indices</td>
                  <td className="p-3">Cannot track positions or window expiration</td>
                  <td className="p-3">Store indices when position matters</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Ignoring integer overflow</td>
                  <td className="p-3">Results become incorrect</td>
                  <td className="p-3">Use appropriate numeric types</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Using \<span className="font-mono text-orange-300 font-semibold">O(n^2)\</span> for large \<span className="font-mono text-orange-300 font-semibold">n\</span></td>
                  <td className="p-3">Runtime may be too high</td>
                  <td className="p-3">Optimize with hashing, sorting, or advanced structures</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Ignoring recursion depth</td>
                  <td className="p-3">Java may throw <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 font-mono text-xs border border-slate-700/60">StackOverflowError</code></td>
                  <td className="p-3">Consider iterative traversal</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Using an unnecessarily complex algorithm</td>
                  <td className="p-3">More chances of implementation mistakes</td>
                  <td className="p-3">Prefer the simplest feasible correct solution</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 20,
    title: "20. Advanced Practice Problems",
    summary: "Curated 3-level problem roadmap: Pattern Recognition, Advanced DS & Algorithms, and Advanced Optimization & DP.",
    content: (
      <div className="space-y-4">
        <p key="p-20-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The purpose of this section is to apply the patterns rather than only memorize their definitions.
        </p>
        <p key="p-20-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Start with understanding the problem, then identify the pattern before attempting implementation.
        </p>
        <h3 key="h3-20-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 1 — Pattern Recognition
        </h3>
        <div key="table-20-19" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Primary pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">N-Queens</td>
                  <td className="p-3">Backtracking</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Subsets</td>
                  <td className="p-3">Backtracking</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Combination Sum</td>
                  <td className="p-3">Backtracking</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Merge Sort</td>
                  <td className="p-3">Divide and Conquer</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Search in Rotated Sorted Array</td>
                  <td className="p-3">Binary Search</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Koko Eating Bananas</td>
                  <td className="p-3">Binary Search on Answer</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Next Greater Element</td>
                  <td className="p-3">Monotonic Stack</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Daily Temperatures</td>
                  <td className="p-3">Monotonic Stack</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sliding Window Maximum</td>
                  <td className="p-3">Monotonic Queue</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-20-20" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 2 — Advanced Data Structures and Algorithms
        </h3>
        <div key="table-20-33" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Primary pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Largest Rectangle in Histogram</td>
                  <td className="p-3">Monotonic Stack</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Trapping Rain Water</td>
                  <td className="p-3">Two Pointers / Stack</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Aggressive Cows</td>
                  <td className="p-3">Binary Search + Greedy</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Number of Islands</td>
                  <td className="p-3">Graph DFS/BFS</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Course Schedule</td>
                  <td className="p-3">Topological Sort</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Network Delay Time</td>
                  <td className="p-3">Dijkstra</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Redundant Connection</td>
                  <td className="p-3">DSU</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Minimum Spanning Tree</td>
                  <td className="p-3">Kruskal / Prim</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Count of Smaller Numbers After Self</td>
                  <td className="p-3">Merge Sort / Fenwick Tree</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-20-34" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Level 3 — Advanced Optimization and DP
        </h3>
        <div key="table-20-47" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Primary pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Word Search</td>
                  <td className="p-3">Backtracking</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Sudoku Solver</td>
                  <td className="p-3">Backtracking + Constraint Propagation</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Travelling Salesperson Problem</td>
                  <td className="p-3">Bitmask DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Burst Balloons</td>
                  <td className="p-3">Interval DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">House Robber III</td>
                  <td className="p-3">Tree DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Longest Increasing Subsequence</td>
                  <td className="p-3">DP / Binary Search</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Count Numbers with a Given Digit Property</td>
                  <td className="p-3">Digit DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Range Frequency Queries</td>
                  <td className="p-3">Offline Processing</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Subarray Queries</td>
                  <td className="p-3">Mo's Algorithm / Fenwick Tree / Segment Tree</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 21,
    title: "21. Module 21 Knowledge Check",
    summary: "Interactive diagnostic scenario assessment matching problem descriptions to their optimal pattern solutions.",
    content: (
      <div className="space-y-4">
        <p key="p-21-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Test whether you can identify the right technique from a problem description.
        </p>
        <p key="p-21-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Module 21 assessment</strong>
        </p>
        <p key="p-21-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0/6 answered
        </p>
        <p key="p-21-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">1. You need to find the minimum capacity that allows packages to be shipped within D days. Feasibility improves as capacity increases. Which pattern fits?</strong>
        </p>
        <p key="p-21-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Monotonic Stack
        </p>
        <p key="p-21-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary Search on Answer
        </p>
        <p key="p-21-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Branch and Bound
        </p>
        <p key="p-21-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Topological Sort
        </p>
        <p key="p-21-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">2. You need the next greater element to the right for every array element. Which technique is most appropriate?</strong>
        </p>
        <p key="p-21-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Monotonic Stack
        </p>
        <p key="p-21-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          BFS
        </p>
        <p key="p-21-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP
        </p>
        <p key="p-21-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Merge Sort
        </p>
        <p key="p-21-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">3. A graph has non-negative weighted edges and you need shortest paths from one source. Which algorithm is suitable?</strong>
        </p>
        <p key="p-21-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Kruskal
        </p>
        <p key="p-21-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dijkstra
        </p>
        <p key="p-21-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Topological Sort
        </p>
        <p key="p-21-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Union-Find only
        </p>
        <p key="p-21-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">4. A problem requires the best selection of tree nodes, with the restriction that adjacent nodes cannot both be selected. Which approach fits?</strong>
        </p>
        <p key="p-21-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sliding Window
        </p>
        <p key="p-21-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP
        </p>
        <p key="p-21-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary Search
        </p>
        <p key="p-21-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prefix XOR
        </p>
        <p key="p-21-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">5. All range queries are available before processing, and a query can be updated efficiently when a range expands or shrinks. Which technique may help?</strong>
        </p>
        <p key="p-21-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mo's Algorithm
        </p>
        <p key="p-21-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dijkstra
        </p>
        <p key="p-21-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          N-Queens
        </p>
        <p key="p-21-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Quick Sort only
        </p>
        <p key="p-21-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">6. A local choice needs a mathematical justification to establish a globally optimal result. Which concept is most relevant?</strong>
        </p>
        <p key="p-21-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Exchange Argument
        </p>
        <p key="p-21-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Hash Collision
        </p>
        <p key="p-21-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          BFS Level Order
        </p>
        <p key="p-21-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Coordinate Compression
        </p>
        <p key="p-21-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Submit answers
        </p>
      </div>
    )
  },
  {
    id: 22,
    title: "22. Final Learning Outcomes",
    summary: "Achieving algorithmic independence, asking the right structural questions, and mastering unseen interview challenges.",
    content: (
      <div className="space-y-4">
        <p key="p-22-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After completing this module, you should be able to:
        </p>
        <ol key="ol-22-19" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Design advanced backtracking solutions with effective pruning.</li>
          <li>Understand Branch and Bound and its role in optimization.</li>
          <li>Apply Divide and Conquer and analyze its recurrence relations.</li>
          <li>Recognize and solve Binary Search on Answer problems.</li>
          <li>Use Monotonic Stacks and Monotonic Queues to optimize array problems.</li>
          <li>Select appropriate graph algorithms based on graph properties.</li>
          <li>Classify DP problems by their state structure.</li>
          <li>Design tree-based DP transitions.</li>
          <li>Prove Greedy algorithms using exchange arguments and other techniques.</li>
          <li>Apply mathematical properties to reduce computational work.</li>
          <li>Use advanced array techniques such as difference arrays, coordinate compression, and sweep line.</li>
          <li>Understand offline query processing and Mo's Algorithm.</li>
          <li>Analyze constraints before choosing an approach.</li>
          <li>Select suitable data structures and algorithms for unfamiliar problems.</li>
          <li>Combine multiple patterns to solve advanced competitive programming problems.</li>
      </ol>
        <h3 key="h3-22-20" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          The most important principle
        </h3>
        <p key="p-22-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not approach advanced DSA by asking, "Which algorithm have I memorized that matches this question?"
        </p>
        <p key="p-22-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead, ask:
        </p>
        <ul key="ul-22-33" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>What is the problem actually asking me to optimize, count, or determine?</li>
          <li>What do the input constraints allow?</li>
          <li>What information must I maintain while processing the input?</li>
          <li>Can I eliminate unnecessary possibilities?</li>
          <li>Are there repeated states or monotonic properties?</li>
          <li>Which data structure makes the required operations efficient?</li>
          <li>Can I prove that my approach is correct?</li>
      </ul>
        <p key="p-22-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">That shift—from memorizing algorithms to recognizing and combining patterns—is what makes you an advanced problem solver.</strong>
        </p>
        <p key="p-22-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;/USER_REQUEST&gt;
        </p>
        <p key="p-22-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;ADDITIONAL_METADATA&gt;
        </p>
        <p key="p-22-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The current local time is: 2026-11-16T17:41:16+05:30.
        </p>
        <p key="p-22-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;/ADDITIONAL_METADATA&gt;
        </p>
      </div>
    )
  }
];
