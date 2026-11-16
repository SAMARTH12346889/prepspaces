import React from "react";

export const JAVA_ADVANCED_DP_SECTIONS = [
  {
    id: 0,
    title: "Module 20 Overview & Advanced Algorithm Design",
    summary: "Curriculum roadmap: Complex state spaces, multidimensional DP, tree/graph DP, bitmasking, digit DP, interval DP, randomized algorithms, and correctness proofs.",
    content: (
      <div className="space-y-4">
        <p key="p-0-0" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;USER_REQUEST&gt;
        </p>
        <p key="p-0-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Module 20 — Advanced Dynamic Programming &amp; Algorithm Design
        </p>
        <p key="p-0-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java + Data Structures and Algorithms | Advanced Algorithms, Optimization &amp; Problem-Solving
        </p>
        <p key="p-0-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This module takes you beyond traditional Dynamic Programming and introduces techniques used to solve difficult algorithmic problems involving complex state spaces, multiple constraints, graphs, trees, strings, subsets, and mathematical optimization.
        </p>
        <p key="p-0-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At this level, the biggest challenge is no longer implementing a known algorithm. It is deciding:
        </p>
        <p key="p-0-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          What information should a DP state store?
        </p>
        <p key="p-0-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          How many dimensions does the problem require?
        </p>
        <p key="p-0-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          How can we reduce the number of states?
        </p>
        <p key="p-0-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can we optimize transitions?
        </p>
        <p key="p-0-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can a problem be transformed into a bitmask or mathematical representation?
        </p>
        <p key="p-0-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          How do we prove that an algorithm produces the correct answer?
        </p>
        <p key="p-0-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          How do we choose between exact, optimized, and randomized approaches?
        </p>
        <p key="p-0-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This module covers five major areas:
        </p>
        <p key="p-0-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced Dynamic Programming: State modeling, multidimensional DP, grid DP, string DP, tree DP, graph DP, and interval DP.
        </p>
        <p key="p-0-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced DP Optimization: Bitmask DP, TSP, digit DP, space optimization, divide-and-conquer DP, and Meet in the Middle.
        </p>
        <p key="p-0-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit Manipulation: Bitwise operators, XOR, bitmasking, and subset operations.
        </p>
        <p key="p-0-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematical and Randomized Algorithms: Number theory, modular arithmetic, randomized techniques, and probabilistic reasoning.
        </p>
        <p key="p-0-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Algorithm Design and Correctness: Complexity analysis, recurrence derivation, invariants, induction, and correctness proofs.
        </p>
        <h4 key="h4-0-18" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 1 — Advanced Dynamic Programming
        </h4>
      </div>
    )
  },
  {
    id: 1,
    title: "1. Advanced DP State Modeling",
    summary: "Defining DP states with multiple interacting conditions, 5-step design recipe, and pseudopolynomial complexity analysis.",
    content: (
      <div className="space-y-4">
        <p key="p-1-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic Programming is a problem-solving technique that breaks a complex problem into smaller overlapping subproblems and stores their solutions.
        </p>
        <p key="p-1-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You have already studied basic DP concepts such as:
        </p>
        <p key="p-1-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fibonacci numbers.
        </p>
        <p key="p-1-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Climbing stairs.
        </p>
        <p key="p-1-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          House robber.
        </p>
        <p key="p-1-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knapsack.
        </p>
        <p key="p-1-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Common Subsequence.
        </p>
        <p key="p-1-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Coin change.
        </p>
        <p key="p-1-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced DP focuses on designing states for problems with several interacting conditions.
        </p>
        <h3 key="h3-1-10" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.1 What Is a DP State?
        </h3>
        <p key="p-1-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A DP state is a representation of the information needed to describe a smaller version of the original problem.
        </p>
        <p key="p-1-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <p key="p-1-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we want to calculate the maximum amount of money that can be earned by selecting items with a weight limit.
        </p>
        <p key="p-1-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A basic state might be:
        </p>
        <p key="p-1-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][w] </span>
        </p>
        <p key="p-1-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where:
        </p>
        <p key="p-1-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          i represents the number of items considered.
        </p>
        <p key="p-1-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          w represents the remaining capacity.
        </p>
        <p key="p-1-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          dp[i][w] represents the maximum value achievable using the first i items within capacity w.
        </p>
        <p key="p-1-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice that one variable is not enough.
        </p>
        <p key="p-1-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We need two dimensions because the result depends on both the available items and the capacity.
        </p>
        <h3 key="h3-1-22" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.2 Five Steps for Designing a DP Solution
        </h3>
        <p key="p-1-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Whenever you encounter a difficult DP problem, follow this process.
        </p>
        <p key="p-1-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define the state
        </p>
        <p key="p-1-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Decide exactly what each DP entry represents.
        </p>
        <p key="p-1-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Identify the choices
        </p>
        <p key="p-1-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Determine which decisions can be made at the current state.
        </p>
        <p key="p-1-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Build the transition
        </p>
        <p key="p-1-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Express the current answer using smaller states.
        </p>
        <p key="p-1-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Determine base cases
        </p>
        <p key="p-1-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Identify the smallest subproblems whose answers are already known.
        </p>
        <p key="p-1-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Choose the computation order
        </p>
        <p key="p-1-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Make sure every state is calculated after the states it depends on.
        </p>
        <p key="p-1-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After these steps, determine the final answer, analyze complexity, and check whether the DP table can be optimized.
        </p>
        <h3 key="h3-1-35" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.3 Advanced State Modeling Example — 0/1 Knapsack
        </h3>
        <p key="p-1-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we have:
        </p>
        <p key="p-1-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Item Weight Value A 2 10 B 3 20 C 4 30
        </p>
        <p key="p-1-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Capacity:
        </p>
        <p key="p-1-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          W = 5
        </p>
        <p key="p-1-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each item can be selected at most once.
        </p>
        <p key="p-1-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We need to maximize the total value without exceeding capacity.
        </p>
        <p key="p-1-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <p key="p-1-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][w] </span>
        </p>
        <p key="p-1-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          as the maximum value obtainable using the first i items with capacity w.
        </p>
        <p key="p-1-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every item, we have two choices.
        </p>
        <p key="p-1-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Choice 1: Do not select the item.
        </p>
        <p key="p-1-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i-1][w] </span>
        </p>
        <p key="p-1-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Choice 2: Select the item.
        </p>
        <p key="p-1-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If its weight fits:
        </p>
        <p key="p-1-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> value_i+dp[i-1][w-weight_i] </span>
        </p>
        <p key="p-1-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-1-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][w]= \max \begin&#123;cases&#125; dp[i-1][w]\\ value_i+dp[i-1][w-weight_i] \end&#123;cases&#125; </span>
        </p>
        <p key="p-1-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The second choice is available only when the item fits.
        </p>
        <p key="p-1-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-1-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class Knapsack &#123; public static int solve( int[] weights, int[] values, int capacity) &#123; int n = weights.length; int[][] dp = new int[n + 1][capacity + 1]; for (int i = 1; i &lt;= n; i++) &#123; int weight = weights[i - 1]; int value = values[i - 1]; for (int w = 0; w &lt;= capacity; w++) &#123; // Do not select this item. dp[i][w] = dp[i - 1][w]; // Select this item if it fits. if (weight &lt;= w) &#123; dp[i][w] = Math.max( dp[i][w], value + dp[i - 1][w - weight] ); &#125; &#125; &#125; return dp[n][capacity]; &#125; public static void main(String[] args) &#123; int[] weights = &#123;2, 3, 4&#125;; int[] values = &#123;10, 20, 30&#125;; System.out.println(solve(weights, values, 5)); &#125; &#125;
        </p>
        <p key="p-1-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-1-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          30
        </p>
        <p key="p-1-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We select items A and B:
        </p>
        <p key="p-1-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 10+20=30 </span>
        </p>
        <p key="p-1-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-1-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(nW)</span>.
        </p>
        <p key="p-1-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(nW)</span>.
        </p>
        <p key="p-1-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is called pseudopolynomial time because its complexity depends on the numerical capacity W, not merely on the number of bits required to represent W.
        </p>
        <h3 key="h3-1-64" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          1.4 State Modeling with More Dimensions
        </h3>
        <p key="p-1-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sometimes two variables are insufficient.
        </p>
        <p key="p-1-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Imagine a stock trading problem with:
        </p>
        <p key="p-1-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Current day.
        </p>
        <p key="p-1-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Whether we own a stock.
        </p>
        <p key="p-1-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Number of transactions remaining.
        </p>
        <p key="p-1-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We may define:
        </p>
        <p key="p-1-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[day][holding][transactionsLeft] </span>
        </p>
        <p key="p-1-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Or:
        </p>
        <p key="p-1-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j][k] </span>
        </p>
        <p key="p-1-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each dimension represents a different condition.
        </p>
        <p key="p-1-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is the foundation of multidimensional DP.
        </p>
        <p key="p-1-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important principle: Do not add dimensions unnecessarily. Every dimension should represent information that changes the answer or the future choices.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Multi-Dimensional DP",
    summary: "2D and 3D DP formulations (e.g. multi-resource knapsack with weight and volume limits, stock trading with transaction constraints).",
    content: (
      <div className="space-y-4">
        <p key="p-2-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multi-dimensional DP uses two, three, or more dimensions to represent a problem's state.
        </p>
        <p key="p-2-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Common applications include:
        </p>
        <p key="p-2-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knapsack problems.
        </p>
        <p key="p-2-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multiple resource constraints.
        </p>
        <p key="p-2-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Stock trading with transaction limits.
        </p>
        <p key="p-2-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Grid optimization.
        </p>
        <p key="p-2-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Scheduling.
        </p>
        <p key="p-2-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          State-transition problems.
        </p>
        <h3 key="h3-2-9" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.1 Two-Dimensional DP
        </h3>
        <p key="p-2-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider Longest Common Subsequence.
        </p>
        <p key="p-2-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given:
        </p>
        <p key="p-2-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          String A = "ABCDGH" String B = "AEDFHR"
        </p>
        <p key="p-2-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want the longest sequence of characters that appears in both strings in the same relative order.
        </p>
        <p key="p-2-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The answer is:
        </p>
        <p key="p-2-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          ADH
        </p>
        <p key="p-2-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Length:
        </p>
        <p key="p-2-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3
        </p>
        <p key="p-2-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <p key="p-2-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j] </span>
        </p>
        <p key="p-2-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          as the LCS length between the first i characters of A and the first j characters of B.
        </p>
        <p key="p-2-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the last characters match:
        </p>
        <p key="p-2-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=1+dp[i-1][j-1] </span>
        </p>
        <p key="p-2-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Otherwise:
        </p>
        <p key="p-2-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=\max(dp[i-1][j],dp[i][j-1]) </span>
        </p>
        <p key="p-2-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-2-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class LCS &#123; public static int longestCommonSubsequence( String a, String b) &#123; int m = a.length(); int n = b.length(); int[][] dp = new int[m + 1][n + 1]; for (int i = 1; i &lt;= m; i++) &#123; for (int j = 1; j &lt;= n; j++) &#123; if (a.charAt(i - 1) == b.charAt(j - 1)) &#123; dp[i][j] = 1 + dp[i - 1][j - 1]; &#125; else &#123; dp[i][j] = Math.max( dp[i - 1][j], dp[i][j - 1] ); &#125; &#125; &#125; return dp[m][n]; &#125; &#125;
        </p>
        <p key="p-2-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-2-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <p key="p-2-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <h3 key="h3-2-30" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          2.2 Three-Dimensional DP
        </h3>
        <p key="p-2-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider a problem where you have to select items subject to two independent resource constraints.
        </p>
        <p key="p-2-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each item has:
        </p>
        <p key="p-2-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Weight.
        </p>
        <p key="p-2-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Volume.
        </p>
        <p key="p-2-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Value.
        </p>
        <p key="p-2-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You have a maximum weight and maximum volume.
        </p>
        <p key="p-2-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <p key="p-2-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][w][v] </span>
        </p>
        <p key="p-2-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          as the maximum value using the first i items with weight capacity w and volume capacity v.
        </p>
        <p key="p-2-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The transition becomes:
        </p>
        <p key="p-2-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][w][v]= \max \begin&#123;cases&#125; dp[i-1][w][v]\\ value_i+dp[i-1][w-weight_i][v-volume_i] \end&#123;cases&#125; </span>
        </p>
        <p key="p-2-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The complexity is:
        </p>
        <p key="p-2-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(nWV) </span>
        </p>
        <p key="p-2-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This can become memory-intensive because the DP table contains three dimensions.
        </p>
        <p key="p-2-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When to use multidimensional DP
        </p>
        <p key="p-2-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use it when a problem has multiple independent conditions that influence future choices.
        </p>
        <p key="p-2-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <p key="p-2-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum profit with limited transactions.
        </p>
        <p key="p-2-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Resource allocation.
        </p>
        <p key="p-2-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multiple knapsack constraints.
        </p>
        <p key="p-2-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest common subsequence between multiple strings.
        </p>
        <p key="p-2-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Scheduling with time and cost constraints.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Grid DP",
    summary: "Navigating 2D spatial coordinate grids: Unique Paths, handling obstacles, Minimum Path Sum, and directional transition equations.",
    content: (
      <div className="space-y-4">
        <p key="p-3-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Grid DP solves problems where the state represents a cell in a two-dimensional grid.
        </p>
        <p key="p-3-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each cell may represent:
        </p>
        <p key="p-3-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A position.
        </p>
        <p key="p-3-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A location with a cost.
        </p>
        <p key="p-3-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A possible state.
        </p>
        <p key="p-3-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A movement destination.
        </p>
        <p key="p-3-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The answer is calculated by combining results from neighboring cells.
        </p>
        <h3 key="h3-3-8" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.1 Unique Paths
        </h3>
        <p key="p-3-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem: A robot starts at the top-left corner of an <span className="font-mono text-orange-300 font-semibold">m \times n</span> grid.
        </p>
        <p key="p-3-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It can move only:
        </p>
        <p key="p-3-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Right.
        </p>
        <p key="p-3-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Down.
        </p>
        <p key="p-3-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the number of different paths to the bottom-right corner.
        </p>
        <p key="p-3-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-3-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Grid: 3 × 3
        </p>
        <p key="p-3-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible paths include:
        </p>
        <p key="p-3-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          R R D D R D R D R D D R D R R D D R D R D D R R
        </p>
        <p key="p-3-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-3-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          6
        </p>
        <p key="p-3-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP State
        </p>
        <p key="p-3-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j] </span>
        </p>
        <p key="p-3-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represents the number of ways to reach cell (i, j).
        </p>
        <p key="p-3-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can arrive at a cell from:
        </p>
        <p key="p-3-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The cell above.
        </p>
        <p key="p-3-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The cell to its left.
        </p>
        <p key="p-3-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-3-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=dp[i-1][j]+dp[i][j-1] </span>
        </p>
        <p key="p-3-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Base condition:
        </p>
        <p key="p-3-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[0][0]=1 </span>
        </p>
        <p key="p-3-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-3-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class UniquePaths &#123; public static long uniquePaths(int m, int n) &#123; long[][] dp = new long[m][n]; for (int i = 0; i &lt; m; i++) &#123; for (int j = 0; j &lt; n; j++) &#123; if (i == 0 &amp;&amp; j == 0) &#123; dp[i][j] = 1; &#125; else &#123; long up = i &gt; 0 ? dp[i - 1][j] : 0; long left = j &gt; 0 ? dp[i][j - 1] : 0; dp[i][j] = up + left; &#125; &#125; &#125; return dp[m - 1][n - 1]; &#125; &#125;
        </p>
        <p key="p-3-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-3-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <p key="p-3-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <h3 key="h3-3-35" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.2 Unique Paths with Obstacles
        </h3>
        <p key="p-3-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now some cells contain obstacles.
        </p>
        <p key="p-3-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 0 0 0 1 0 0 0 0
        </p>
        <p key="p-3-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here:
        </p>
        <p key="p-3-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 means open.
        </p>
        <p key="p-3-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1 means blocked.
        </p>
        <p key="p-3-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The robot cannot enter blocked cells.
        </p>
        <p key="p-3-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The transition becomes:
        </p>
        <p key="p-3-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=0 </span>
        </p>
        <p key="p-3-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          for blocked cells.
        </p>
        <p key="p-3-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Otherwise:
        </p>
        <p key="p-3-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=dp[i-1][j]+dp[i][j-1] </span>
        </p>
        <p key="p-3-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-3-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class UniquePathsObstacles &#123; public static long uniquePaths(int[][] grid) &#123; int m = grid.length; int n = grid[0].length; long[][] dp = new long[m][n]; if (grid[0][0] == 1) &#123; return 0; &#125; dp[0][0] = 1; for (int i = 0; i &lt; m; i++) &#123; for (int j = 0; j &lt; n; j++) &#123; if (grid[i][j] == 1) &#123; dp[i][j] = 0; continue; &#125; if (i &gt; 0) &#123; dp[i][j] += dp[i - 1][j]; &#125; if (j &gt; 0) &#123; dp[i][j] += dp[i][j - 1]; &#125; &#125; &#125; return dp[m - 1][n - 1]; &#125; &#125;
        </p>
        <h3 key="h3-3-49" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          3.3 Minimum Path Sum
        </h3>
        <p key="p-3-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem: Find the minimum cost path from the top-left corner to the bottom-right corner.
        </p>
        <p key="p-3-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-3-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1 3 1 1 5 1 4 2 1
        </p>
        <p key="p-3-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can only move right or down.
        </p>
        <p key="p-3-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The minimum path is:
        </p>
        <p key="p-3-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1 → 3 → 1 → 1 → 1
        </p>
        <p key="p-3-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-3-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 1+3+1+1+1=7 </span>
        </p>
        <p key="p-3-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP Transition
        </p>
        <p key="p-3-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=grid[i][j]+ \min(dp[i-1][j],dp[i][j-1]) </span>
        </p>
        <p key="p-3-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-3-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class MinimumPathSum &#123; public static long minPathSum(int[][] grid) &#123; int m = grid.length; int n = grid[0].length; long[][] dp = new long[m][n]; dp[0][0] = grid[0][0]; for (int i = 0; i &lt; m; i++) &#123; for (int j = 0; j &lt; n; j++) &#123; if (i == 0 &amp;&amp; j == 0) &#123; continue; &#125; long up = i &gt; 0 ? dp[i - 1][j] : Long.MAX_VALUE; long left = j &gt; 0 ? dp[i][j - 1] : Long.MAX_VALUE; dp[i][j] = grid[i][j] + Math.min(up, left); &#125; &#125; return dp[m - 1][n - 1]; &#125; &#125;
        </p>
        <p key="p-3-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-3-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <p key="p-3-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <p key="p-3-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important Grid DP Patterns
        </p>
        <p key="p-3-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem
        </p>
        <p key="p-3-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Transition idea
        </p>
        <p key="p-3-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Unique Paths
        </p>
        <p key="p-3-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Add top and left
        </p>
        <p key="p-3-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Unique Paths with Obstacles
        </p>
        <p key="p-3-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Ignore blocked cells
        </p>
        <p key="p-3-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum Path Sum
        </p>
        <p key="p-3-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Add current cost to minimum predecessor
        </p>
        <p key="p-3-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum Path Sum
        </p>
        <p key="p-3-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Add current value to maximum predecessor
        </p>
        <p key="p-3-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Triangle Minimum Path
        </p>
        <p key="p-3-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Compare two possible parent positions
        </p>
        <p key="p-3-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Falling Path Sum
        </p>
        <p key="p-3-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider neighboring cells in previous row
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "4. String DP",
    summary: "Levenshtein Edit Distance (insert, delete, replace transitions) and contrasting contiguous substrings with non-contiguous subsequences.",
    content: (
      <div className="space-y-4">
        <p key="p-4-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          String DP solves optimization and matching problems involving sequences of characters.
        </p>
        <p key="p-4-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Common examples include:
        </p>
        <p key="p-4-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Common Subsequence.
        </p>
        <p key="p-4-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Common Substring.
        </p>
        <p key="p-4-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit Distance.
        </p>
        <p key="p-4-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Palindromic Subsequence.
        </p>
        <p key="p-4-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Distinct Subsequences.
        </p>
        <p key="p-4-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Regular Expression Matching.
        </p>
        <p key="p-4-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Wildcard Matching.
        </p>
        <h3 key="h3-4-10" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.1 Edit Distance
        </h3>
        <p key="p-4-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit Distance, also called Levenshtein Distance, finds the minimum number of operations needed to convert one string into another.
        </p>
        <p key="p-4-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Allowed operations:
        </p>
        <p key="p-4-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Insert a character.
        </p>
        <p key="p-4-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Delete a character.
        </p>
        <p key="p-4-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Replace a character.
        </p>
        <p key="p-4-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-4-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Source: kitten Target: sitting
        </p>
        <p key="p-4-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One possible sequence:
        </p>
        <p key="p-4-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          kitten → sitten Replace k with s sitten → sittin Replace e with i sittin → sitting Insert g
        </p>
        <p key="p-4-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Answer:
        </p>
        <p key="p-4-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3
        </p>
        <p key="p-4-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP State
        </p>
        <p key="p-4-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j] </span>
        </p>
        <p key="p-4-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represents the minimum operations needed to transform the first i characters of string A into the first j characters of string B.
        </p>
        <p key="p-4-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the current characters match:
        </p>
        <p key="p-4-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=dp[i-1][j-1] </span>
        </p>
        <p key="p-4-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Otherwise, consider three operations.
        </p>
        <p key="p-4-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Insertion:
        </p>
        <p key="p-4-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j-1]+1 </span>
        </p>
        <p key="p-4-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Deletion:
        </p>
        <p key="p-4-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i-1][j]+1 </span>
        </p>
        <p key="p-4-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Replacement:
        </p>
        <p key="p-4-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i-1][j-1]+1 </span>
        </p>
        <p key="p-4-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-4-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=1+\min \begin&#123;cases&#125; dp[i-1][j]\\ dp[i][j-1]\\ dp[i-1][j-1] \end&#123;cases&#125; </span>
        </p>
        <p key="p-4-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-4-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class EditDistance &#123; public static int minDistance(String a, String b) &#123; int m = a.length(); int n = b.length(); int[][] dp = new int[m + 1][n + 1]; for (int i = 0; i &lt;= m; i++) &#123; dp[i][0] = i; &#125; for (int j = 0; j &lt;= n; j++) &#123; dp[0][j] = j; &#125; for (int i = 1; i &lt;= m; i++) &#123; for (int j = 1; j &lt;= n; j++) &#123; if (a.charAt(i - 1) == b.charAt(j - 1)) &#123; dp[i][j] = dp[i - 1][j - 1]; &#125; else &#123; int insert = dp[i][j - 1]; int delete = dp[i - 1][j]; int replace = dp[i - 1][j - 1]; dp[i][j] = 1 + Math.min( insert, Math.min(delete, replace) ); &#125; &#125; &#125; return dp[m][n]; &#125; public static void main(String[] args) &#123; System.out.println( minDistance("kitten", "sitting") ); &#125; &#125;
        </p>
        <p key="p-4-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-4-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3
        </p>
        <p key="p-4-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-4-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <p key="p-4-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(mn)</span>.
        </p>
        <h3 key="h3-4-43" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          4.2 Longest Common Substring
        </h3>
        <p key="p-4-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not confuse Longest Common Substring with Longest Common Subsequence.
        </p>
        <p key="p-4-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Substring: Characters must be contiguous.
        </p>
        <p key="p-4-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subsequence: Characters must maintain their order but may have gaps.
        </p>
        <p key="p-4-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-4-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A = "ABCDXYZ" B = "XYZABCD"
        </p>
        <p key="p-4-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The longest common substring can be "ABCD" or "XYZ".
        </p>
        <p key="p-4-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The transition for the longest common substring is different:
        </p>
        <p key="p-4-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If characters match:
        </p>
        <p key="p-4-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=1+dp[i-1][j-1] </span>
        </p>
        <p key="p-4-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Otherwise:
        </p>
        <p key="p-4-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=0 </span>
        </p>
        <p key="p-4-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We track the maximum value across all cells.
        </p>
        <p key="p-4-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This illustrates why state definitions and transitions must be designed according to the problem.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Longest Palindromic Subsequence",
    summary: "Interval-based string expansion, why table iteration runs backward, and the equivalence between LPS and LCS of s with reverse(s).",
    content: (
      <div className="space-y-4">
        <p key="p-5-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Longest Palindromic Subsequence (LPS) problem asks for the length of the longest subsequence that reads the same forward and backward.
        </p>
        <p key="p-5-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-5-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          String: "BBABCBCAB"
        </p>
        <p key="p-5-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One longest palindromic subsequence is:
        </p>
        <p key="p-5-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          BABCBAB
        </p>
        <p key="p-5-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Length:
        </p>
        <p key="p-5-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          7
        </p>
        <p key="p-5-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The selected characters do not need to be adjacent.
        </p>
        <h3 key="h3-5-9" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.1 DP State
        </h3>
        <p key="p-5-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <p key="p-5-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j] </span>
        </p>
        <p key="p-5-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          as the longest palindromic subsequence contained in the substring from index i to index j.
        </p>
        <p key="p-5-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the two boundary characters match:
        </p>
        <p key="p-5-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]=2+dp[i+1][j-1] </span>
        </p>
        <p key="p-5-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Otherwise:
        </p>
        <p key="p-5-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]= \max(dp[i+1][j],dp[i][j-1]) </span>
        </p>
        <p key="p-5-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Base case:
        </p>
        <p key="p-5-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][i]=1 </span>
        </p>
        <p key="p-5-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A single character is itself a palindrome.
        </p>
        <h3 key="h3-5-20" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.2 Why Do We Process the Table Backwards?
        </h3>
        <p key="p-5-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The state dp[i][j] depends on:
        </p>
        <p key="p-5-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          dp[i+1][j]
        </p>
        <p key="p-5-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          dp[i][j-1]
        </p>
        <p key="p-5-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          dp[i+1][j-1]
        </p>
        <p key="p-5-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, calculate:
        </p>
        <p key="p-5-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          i from right to left.
        </p>
        <p key="p-5-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          j from left to right, starting beyond i.
        </p>
        <p key="p-5-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This ensures the smaller intervals are already available.
        </p>
        <h3 key="h3-5-29" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.3 Java Implementation
        </h3>
        <p key="p-5-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class LongestPalindromicSubsequence &#123; public static int longestPalindromeSubseq(String s) &#123; int n = s.length(); if (n == 0) &#123; return 0; &#125; int[][] dp = new int[n][n]; for (int i = n - 1; i &gt;= 0; i--) &#123; dp[i][i] = 1; for (int j = i + 1; j &lt; n; j++) &#123; if (s.charAt(i) == s.charAt(j)) &#123; dp[i][j] = 2; if (i + 1 &lt;= j - 1) &#123; dp[i][j] += dp[i + 1][j - 1]; &#125; &#125; else &#123; dp[i][j] = Math.max( dp[i + 1][j], dp[i][j - 1] ); &#125; &#125; &#125; return dp[0][n - 1]; &#125; public static void main(String[] args) &#123; System.out.println( longestPalindromeSubseq("BBABCBCAB") ); &#125; &#125;
        </p>
        <p key="p-5-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-5-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          7
        </p>
        <p key="p-5-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-5-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>.
        </p>
        <p key="p-5-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>.
        </p>
        <h3 key="h3-5-36" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          5.4 Connection Between LPS and LCS
        </h3>
        <p key="p-5-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There is another way to solve LPS.
        </p>
        <p key="p-5-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reverse the original string.
        </p>
        <p key="p-5-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then calculate the Longest Common Subsequence between:
        </p>
        <p key="p-5-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Original string Reversed string
        </p>
        <p key="p-5-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The resulting LCS length equals the LPS length.
        </p>
        <p key="p-5-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This gives you another important connection between string DP problems.
        </p>
        <p key="p-5-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interview insight: When a problem asks for a palindromic subsequence, consider both interval DP and the LCS-with-reversed-string formulation.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "6. DP on Trees",
    summary: "Hierarchical subproblem processing: House Robber III, tree diameter, and taking vs skipping nodes in O(N) time and O(H) stack depth.",
    content: (
      <div className="space-y-4">
        <p key="p-6-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP applies dynamic programming to tree structures.
        </p>
        <p key="p-6-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A tree is a connected graph containing no cycles.
        </p>
        <p key="p-6-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In tree DP, the answer at a node is calculated using answers from its children.
        </p>
        <p key="p-6-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical applications:
        </p>
        <p key="p-6-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum independent set.
        </p>
        <p key="p-6-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree diameter.
        </p>
        <p key="p-6-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subtree optimization.
        </p>
        <p key="p-6-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum path sum.
        </p>
        <p key="p-6-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selecting nodes under constraints.
        </p>
        <p key="p-6-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum vertex cover.
        </p>
        <h3 key="h3-6-11" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.1 Example — House Robber on a Tree
        </h3>
        <p key="p-6-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Imagine houses are arranged as a tree.
        </p>
        <p key="p-6-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each node contains some money.
        </p>
        <p key="p-6-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You cannot rob two directly connected houses.
        </p>
        <p key="p-6-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the maximum money that can be collected.
        </p>
        <p key="p-6-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-6-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3 / \ 2 3 \ \ 3 1
        </p>
        <p key="p-6-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible choices include:
        </p>
        <p key="p-6-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3 + 3 + 1 = 7
        </p>
        <p key="p-6-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can rob the root and its grandchildren because there are no direct connections between them.
        </p>
        <h3 key="h3-6-21" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.2 DP State
        </h3>
        <p key="p-6-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every node, maintain two answers:
        </p>
        <p key="p-6-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> take[u] </span>
        </p>
        <p key="p-6-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum money when we rob node u.
        </p>
        <p key="p-6-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> skip[u] </span>
        </p>
        <p key="p-6-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum money when we do not rob node u.
        </p>
        <p key="p-6-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we take the current node, we cannot take its children:
        </p>
        <p key="p-6-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> take[u]=value[u]+ skip[left]+skip[right] </span>
        </p>
        <p key="p-6-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we skip the current node, we can take or skip each child:
        </p>
        <p key="p-6-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> skip[u]= \max(take[left],skip[left]) + \max(take[right],skip[right]) </span>
        </p>
        <p key="p-6-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a general tree, sum over all children.
        </p>
        <h3 key="h3-6-32" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          6.3 Java Implementation
        </h3>
        <p key="p-6-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class TreeDP &#123; static class Node &#123; long value; Node left; Node right; Node(long value) &#123; this.value = value; &#125; &#125; static class State &#123; long take; long skip; State(long take, long skip) &#123; this.take = take; this.skip = skip; &#125; &#125; public static State solve(Node root) &#123; if (root == null) &#123; return new State(0, 0); &#125; State left = solve(root.left); State right = solve(root.right); long take = root.value + left.skip + right.skip; long skip = Math.max(left.take, left.skip) + Math.max(right.take, right.skip); return new State(take, skip); &#125; public static long maximumRobbery(Node root) &#123; State result = solve(root); return Math.max(result.take, result.skip); &#125; &#125;
        </p>
        <p key="p-6-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-6-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <p key="p-6-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(h)</span> recursion stack, where h is the tree height.
        </p>
        <p key="p-6-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a balanced tree, height is approximately <span className="font-mono text-orange-300 font-semibold">O(\log n)</span>. For a skewed tree, it can be <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <p key="p-6-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important Tree DP Patterns
        </p>
        <p key="p-6-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem
        </p>
        <p key="p-6-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP idea
        </p>
        <p key="p-6-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          House Robber III
        </p>
        <p key="p-6-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Take node or skip node
        </p>
        <p key="p-6-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree Diameter
        </p>
        <p key="p-6-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Combine longest child paths
        </p>
        <p key="p-6-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum Path Sum
        </p>
        <p key="p-6-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Best downward path and global path
        </p>
        <p key="p-6-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Vertex Cover
        </p>
        <p key="p-6-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Select node or cover using children
        </p>
        <p key="p-6-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subtree Sum
        </p>
        <p key="p-6-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Combine children with current node
        </p>
        <p key="p-6-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree Independent Set
        </p>
        <p key="p-6-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Ensure selected vertices are non-adjacent
        </p>
      </div>
    )
  },
  {
    id: 7,
    title: "7. DP on Graphs",
    summary: "Topological DP on Directed Acyclic Graphs (DAGs), longest path in O(V + E), and handling general cyclic graphs.",
    content: (
      <div className="space-y-4">
        <p key="p-7-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Graph DP is a broader category where graph structure determines the dependency between states.
        </p>
        <p key="p-7-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One of the most important forms is DP on Directed Acyclic Graphs.
        </p>
        <p key="p-7-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why DAGs?
        </p>
        <p key="p-7-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because a DAG has a topological ordering.
        </p>
        <p key="p-7-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This guarantees that we can process a node after all of its predecessors have been processed.
        </p>
        <h3 key="h3-7-6" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.1 Longest Path in a DAG
        </h3>
        <p key="p-7-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <p key="p-7-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 → 1 → 3 \ ↑ → 2 ───
        </p>
        <p key="p-7-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each edge has a weight.
        </p>
        <p key="p-7-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want the maximum-weight path from a source vertex.
        </p>
        <p key="p-7-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <p key="p-7-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[v]=\text&#123;maximum path weight from source to &#125;v </span>
        </p>
        <p key="p-7-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every edge:
        </p>
        <p key="p-7-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> u\rightarrow v </span>
        </p>
        <p key="p-7-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          with weight w:
        </p>
        <p key="p-7-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[v]=\max(dp[v],dp[u]+w) </span>
        </p>
        <p key="p-7-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Process vertices in topological order.
        </p>
        <h3 key="h3-7-18" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.2 Java Implementation
        </h3>
        <p key="p-7-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.*; public class DAGLongestPath &#123; static class Edge &#123; int to; long weight; Edge(int to, long weight) &#123; this.to = to; this.weight = weight; &#125; &#125; static final long NEG_INF = Long.MIN_VALUE / 4; public static long[] longestPath( List&lt;List&lt;Edge&gt;&gt; graph, int source) &#123; int n = graph.size(); int[] indegree = new int[n]; for (int u = 0; u &lt; n; u++) &#123; for (Edge edge : graph.get(u)) &#123; indegree[edge.to]++; &#125; &#125; Queue&lt;Integer&gt; queue = new ArrayDeque&lt;&gt;(); for (int i = 0; i &lt; n; i++) &#123; if (indegree[i] == 0) &#123; queue.offer(i); &#125; &#125; List&lt;Integer&gt; topo = new ArrayList&lt;&gt;(); while (!queue.isEmpty()) &#123; int u = queue.poll(); topo.add(u); for (Edge edge : graph.get(u)) &#123; if (--indegree[edge.to] == 0) &#123; queue.offer(edge.to); &#125; &#125; &#125; if (topo.size() != n) &#123; throw new IllegalArgumentException("Graph is not a DAG"); &#125; long[] dp = new long[n]; Arrays.fill(dp, NEG_INF); dp[source] = 0; for (int u : topo) &#123; if (dp[u] == NEG_INF) &#123; continue; &#125; for (Edge edge : graph.get(u)) &#123; int v = edge.to; dp[v] = Math.max( dp[v], dp[u] + edge.weight ); &#125; &#125; return dp; &#125; &#125;
        </p>
        <p key="p-7-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-7-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>.
        </p>
        <p key="p-7-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(V)</span>.
        </p>
        <h3 key="h3-7-23" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          7.3 DP on Cyclic Graphs
        </h3>
        <p key="p-7-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A major distinction:
        </p>
        <p key="p-7-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A DAG can be processed with topological DP.
        </p>
        <p key="p-7-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A general cyclic graph may require more sophisticated methods.
        </p>
        <p key="p-7-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <p key="p-7-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Shortest paths may use Dijkstra or Bellman-Ford.
        </p>
        <p key="p-7-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Strongly connected components can be compressed into a condensation DAG.
        </p>
        <p key="p-7-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some cyclic optimization problems require special state representations.
        </p>
        <p key="p-7-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Hamiltonian path problems may require bitmask DP.
        </p>
        <p key="p-7-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not assume every graph can be processed using a simple topological DP.
        </p>
        <h4 key="h4-7-33" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 2 — Advanced DP State Compression and Optimization
        </h4>
      </div>
    )
  },
  {
    id: 8,
    title: "8. Bitmask DP",
    summary: "Representing visited subsets and state selections using integers: bitwise operations, submask transitions, and O(n² 2ⁿ) complexity.",
    content: (
      <div className="space-y-4">
        <p key="p-8-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP is a technique that represents a set of selected or visited elements using the bits of an integer.
        </p>
        <p key="p-8-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is particularly useful when the number of elements is small, usually around 15–20 for more demanding state-transition problems, depending on memory and implementation.
        </p>
        <h3 key="h3-8-3" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.1 Why Use Bitmasks?
        </h3>
        <p key="p-8-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we have four cities:
        </p>
        <p key="p-8-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0, 1, 2, 3
        </p>
        <p key="p-8-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want to store which cities have already been visited.
        </p>
        <p key="p-8-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A boolean array would look like:
        </p>
        <p key="p-8-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [true, false, true, false]
        </p>
        <p key="p-8-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This means:
        </p>
        <p key="p-8-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Cities 0 and 2 are visited.
        </p>
        <p key="p-8-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can represent the same information using binary:
        </p>
        <p key="p-8-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0101
        </p>
        <p key="p-8-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each bit represents one city.
        </p>
        <p key="p-8-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          City
        </p>
        <p key="p-8-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit
        </p>
        <p key="p-8-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-8-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-8-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-8-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-8-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          2
        </p>
        <p key="p-8-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-8-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3
        </p>
        <p key="p-8-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-8-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The resulting integer is:
        </p>
        <p key="p-8-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> mask=0101_2=5 </span>
        </p>
        <p key="p-8-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is called a bitmask.
        </p>
        <h3 key="h3-8-27" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.2 Common Bitmask Operations
        </h3>
        <p key="p-8-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Check whether city i is visited:
        </p>
        <p key="p-8-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          (mask &amp; (1 &lt;&lt; i)) != 0
        </p>
        <p key="p-8-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mark city i as visited:
        </p>
        <p key="p-8-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          mask | (1 &lt;&lt; i)
        </p>
        <p key="p-8-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Remove city i from the visited set:
        </p>
        <p key="p-8-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          mask &amp; ~(1 &lt;&lt; i)
        </p>
        <p key="p-8-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Toggle city i:
        </p>
        <p key="p-8-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          mask ^ (1 &lt;&lt; i)
        </p>
        <h3 key="h3-8-36" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.3 Bitmask DP State
        </h3>
        <p key="p-8-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common state is:
        </p>
        <p key="p-8-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[mask][i] </span>
        </p>
        <p key="p-8-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This means:
        </p>
        <p key="p-8-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The best result after visiting exactly the set of vertices represented by mask, ending at vertex i.
        </p>
        <p key="p-8-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a powerful state representation for problems involving subsets and permutations.
        </p>
        <h3 key="h3-8-42" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          8.4 Complexity
        </h3>
        <p key="p-8-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are:
        </p>
        <p key="p-8-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2^n </span>
        </p>
        <p key="p-8-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          possible masks.
        </p>
        <p key="p-8-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we have another dimension for the ending vertex, we have:
        </p>
        <p key="p-8-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> n2^n </span>
        </p>
        <p key="p-8-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          states.
        </p>
        <p key="p-8-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If each state considers up to n transitions:
        </p>
        <p key="p-8-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n^2 2^n) </span>
        </p>
        <p key="p-8-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is exponential, but significantly better than enumerating all <span className="font-mono text-orange-300 font-semibold">n!</span> possible permutations for many problems.
        </p>
      </div>
    )
  },
  {
    id: 9,
    title: "9. Traveling Salesman Problem (TSP)",
    summary: "NP-hard optimization solved via Bitmask DP: visiting all vertices and closing the Hamiltonian cycle to city 0.",
    content: (
      <div className="space-y-4">
        <p key="p-9-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Traveling Salesman Problem is one of the classic applications of bitmask DP.
        </p>
        <p key="p-9-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem: A salesperson starts in one city, visits every other city exactly once, and returns to the starting city.
        </p>
        <p key="p-9-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the minimum possible total travel cost.
        </p>
        <p key="p-9-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-9-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          10 0 ----- 1 | \ | | \15 | 35 15 \ | | \| 2 ----- 3 20
        </p>
        <p key="p-9-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The problem is difficult because the number of possible tours grows factorially.
        </p>
        <p key="p-9-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A brute-force approach considers approximately:
        </p>
        <p key="p-9-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> (n-1)! </span>
        </p>
        <p key="p-9-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          tours when fixing the starting city.
        </p>
        <p key="p-9-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP can solve it more efficiently.
        </p>
        <h3 key="h3-9-11" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.1 DP State
        </h3>
        <p key="p-9-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-9-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[mask][u] </span>
        </p>
        <p key="p-9-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the minimum cost of:
        </p>
        <p key="p-9-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Starting at city 0.
        </p>
        <p key="p-9-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Visiting exactly the cities in mask.
        </p>
        <p key="p-9-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Ending at city u.
        </p>
        <p key="p-9-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initial state:
        </p>
        <p key="p-9-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[1][0]=0 </span>
        </p>
        <p key="p-9-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          because only city 0 is visited initially.
        </p>
        <h3 key="h3-9-21" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.2 Transition
        </h3>
        <p key="p-9-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we are currently at city u.
        </p>
        <p key="p-9-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want to travel to city v, which has not been visited.
        </p>
        <p key="p-9-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The new mask is:
        </p>
        <p key="p-9-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> newMask=mask|(1&lt;&lt;v) </span>
        </p>
        <p key="p-9-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The new cost is:
        </p>
        <p key="p-9-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[newMask][v] = \min \left( dp[newMask][v], dp[mask][u]+cost[u][v] \right) </span>
        </p>
        <p key="p-9-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Finally, after visiting all cities, return to city 0.
        </p>
        <p key="p-9-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> answer= \min_&#123;u\ne0&#125; \left( dp[fullMask][u]+cost[u][0] \right) </span>
        </p>
        <h3 key="h3-9-30" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          9.3 Java Implementation
        </h3>
        <p key="p-9-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This implementation assumes a complete directed cost matrix and a small number of cities.
        </p>
        <p key="p-9-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.Arrays; public class TravelingSalesman &#123; static final long INF = Long.MAX_VALUE / 4; public static long tsp(long[][] cost) &#123; int n = cost.length; if (n == 0) &#123; return 0; &#125; if (n == 1) &#123; return 0; &#125; int totalMasks = 1 &lt;&lt; n; long[][] dp = new long[totalMasks][n]; for (long[] row : dp) &#123; Arrays.fill(row, INF); &#125; // Only city 0 is visited initially. dp[1][0] = 0; for (int mask = 1; mask &lt; totalMasks; mask++) &#123; for (int u = 0; u &lt; n; u++) &#123; if ((mask &amp; (1 &lt;&lt; u)) == 0) &#123; continue; &#125; if (dp[mask][u] == INF) &#123; continue; &#125; for (int v = 0; v &lt; n; v++) &#123; if ((mask &amp; (1 &lt;&lt; v)) != 0) &#123; continue; &#125; int newMask = mask | (1 &lt;&lt; v); long newCost = dp[mask][u] + cost[u][v]; dp[newMask][v] = Math.min( dp[newMask][v], newCost ); &#125; &#125; &#125; int fullMask = totalMasks - 1; long answer = INF; // Return to city 0. for (int u = 1; u &lt; n; u++) &#123; if (dp[fullMask][u] == INF || cost[u][0] == INF) &#123; continue; &#125; answer = Math.min( answer, dp[fullMask][u] + cost[u][0] ); &#125; return answer; &#125; public static void main(String[] args) &#123; long I = INF; long[][] cost = &#123; &#123;0, 10, 15, 20&#125;, &#123;10, 0, 35, 25&#125;, &#123;15, 35, 0, 30&#125;, &#123;20, 25, 30, 0&#125; &#125;; System.out.println(tsp(cost)); &#125; &#125;
        </p>
        <p key="p-9-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-9-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          80
        </p>
        <p key="p-9-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-9-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n^2 2^n)</span>.
        </p>
        <p key="p-9-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(n2^n)</span>.
        </p>
        <p key="p-9-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important TSP Insight
        </p>
        <p key="p-9-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          TSP is NP-hard.
        </p>
        <p key="p-9-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP does not turn it into a polynomial-time problem. It reduces the search space compared with brute-force permutation enumeration.
        </p>
        <p key="p-9-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This makes it useful for small input sizes, but not for arbitrarily large city counts.
        </p>
        <p key="p-9-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Also, the code uses 1 &lt;&lt; n, which is appropriate only for relatively small n. For larger masks, Java's long can represent up to 63 nonnegative bit positions, but the DP memory requirement becomes infeasible much earlier.
        </p>
      </div>
    )
  },
  {
    id: 10,
    title: "10. Digit DP Introduction",
    summary: "Counting numbers in range [0, N] satisfying digit sum or pattern properties using position, sum, and tightness flags.",
    content: (
      <div className="space-y-4">
        <p key="p-10-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Digit DP is an advanced technique for counting integers that satisfy a condition over their digits.
        </p>
        <p key="p-10-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is particularly useful for problems such as:
        </p>
        <p key="p-10-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count numbers with a digit sum at most K.
        </p>
        <p key="p-10-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count numbers containing no repeated digits.
        </p>
        <p key="p-10-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count numbers containing a particular digit.
        </p>
        <p key="p-10-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count numbers divisible by a given integer.
        </p>
        <p key="p-10-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count numbers with restricted digit patterns.
        </p>
        <p key="p-10-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count numbers in a range satisfying digit conditions.
        </p>
        <p key="p-10-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of checking every number individually, Digit DP processes the digits of an upper bound.
        </p>
        <h3 key="h3-10-10" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.1 Example Problem
        </h3>
        <p key="p-10-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count the numbers from 0 through 100 whose digit sum is at most 5.
        </p>
        <p key="p-10-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some valid numbers:
        </p>
        <p key="p-10-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0, 1, 2, 3, 4, 5 10, 11, 12, 13, 14 20, 21, 22, 30 ...
        </p>
        <p key="p-10-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Checking every number individually is unnecessary.
        </p>
        <p key="p-10-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can construct a DP using the digits of the upper bound.
        </p>
        <h3 key="h3-10-16" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.2 Digit DP State
        </h3>
        <p key="p-10-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common state consists of:
        </p>
        <p key="p-10-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[pos][sum][tight] </span>
        </p>
        <p key="p-10-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where:
        </p>
        <p key="p-10-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          pos = current digit position.
        </p>
        <p key="p-10-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          sum = accumulated digit sum.
        </p>
        <p key="p-10-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          tight = whether the digits selected so far still equal the upper bound's prefix.
        </p>
        <p key="p-10-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          What Does Tight Mean?
        </p>
        <p key="p-10-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the upper bound is:
        </p>
        <p key="p-10-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          527
        </p>
        <p key="p-10-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At the first digit, we may choose only digits from 0 to 5.
        </p>
        <p key="p-10-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we choose 5, we remain tight.
        </p>
        <p key="p-10-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we choose 3, we become non-tight because our number is already smaller than 527.
        </p>
        <p key="p-10-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once non-tight, later digits can range freely from 0 to 9.
        </p>
        <h3 key="h3-10-30" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.3 Transition
        </h3>
        <p key="p-10-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At each position:
        </p>
        <p key="p-10-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> limit= \begin&#123;cases&#125; digit[pos] &amp; \text&#123;if tight&#125;\\ 9 &amp; \text&#123;otherwise&#125; \end&#123;cases&#125; </span>
        </p>
        <p key="p-10-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Try every digit from zero to limit.
        </p>
        <p key="p-10-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Update the sum and the tight flag.
        </p>
        <h3 key="h3-10-35" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          10.4 Java Implementation — Count Numbers with Digit Sum at Most K
        </h3>
        <p key="p-10-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.Arrays; public class DigitDP &#123; private String digits; private int limitSum; private long[][] memo; public long count(long n, int k) &#123; if (n &lt; 0 || k &lt; 0) &#123; return 0; &#125; digits = Long.toString(n); limitSum = k; memo = new long[digits.length()][k + 1]; for (long[] row : memo) &#123; Arrays.fill(row, -1); &#125; return dfs(0, 0, true); &#125; private long dfs( int pos, int sum, boolean tight) &#123; if (sum &gt; limitSum) &#123; return 0; &#125; if (pos == digits.length()) &#123; return 1; &#125; if (!tight &amp;&amp; memo[pos][sum] != -1) &#123; return memo[pos][sum]; &#125; int maxDigit = tight ? digits.charAt(pos) - '0' : 9; long answer = 0; for (int d = 0; d &lt;= maxDigit; d++) &#123; boolean nextTight = tight &amp;&amp; (d == maxDigit); answer += dfs( pos + 1, sum + d, nextTight ); &#125; if (!tight) &#123; memo[pos][sum] = answer; &#125; return answer; &#125; public static void main(String[] args) &#123; DigitDP solver = new DigitDP(); System.out.println(solver.count(100, 5)); &#125; &#125;
        </p>
        <p key="p-10-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-10-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          21
        </p>
        <p key="p-10-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Leading zeroes are allowed in the representation. They do not change the digit sum, so every number from zero through the bound is counted exactly once.
        </p>
        <p key="p-10-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-10-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the upper bound has D digits and the digit-sum limit is K:
        </p>
        <p key="p-10-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(DK \times 10)</span>.
        </p>
        <p key="p-10-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Memoization space: <span className="font-mono text-orange-300 font-semibold">O(DK)</span>.
        </p>
        <p key="p-10-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recursion depth: <span className="font-mono text-orange-300 font-semibold">O(D)</span>.
        </p>
        <p key="p-10-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced Digit DP States
        </p>
        <p key="p-10-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          More complicated problems may need additional dimensions:
        </p>
        <p key="p-10-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          dp[position][sum][tight][started]
        </p>
        <p key="p-10-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Or:
        </p>
        <p key="p-10-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          dp[position][remainder][tight][started]
        </p>
        <p key="p-10-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, counting numbers divisible by 7 may require tracking:
        </p>
        <p key="p-10-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> remainder=(remainder\times10+digit)\bmod7 </span>
        </p>
        <p key="p-10-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important: For very large bounds or counts that exceed long, use BigInteger.
        </p>
      </div>
    )
  },
  {
    id: 11,
    title: "11. Interval DP",
    summary: "Contiguous sub-range optimization: Matrix Chain Multiplication O(N³), split points k, and Burst Balloons inside-out transition.",
    content: (
      <div className="space-y-4">
        <p key="p-11-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval DP solves problems in which the state represents a contiguous range.
        </p>
        <p key="p-11-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of processing one position at a time, we solve increasingly larger intervals.
        </p>
        <p key="p-11-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical problems:
        </p>
        <p key="p-11-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix Chain Multiplication.
        </p>
        <p key="p-11-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Burst Balloons.
        </p>
        <p key="p-11-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum Cost to Cut a Stick.
        </p>
        <p key="p-11-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Palindrome partitioning.
        </p>
        <p key="p-11-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal Binary Search Tree.
        </p>
        <p key="p-11-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Boolean expression evaluation.
        </p>
        <h3 key="h3-11-10" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.1 Basic Idea
        </h3>
        <p key="p-11-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <p key="p-11-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j] </span>
        </p>
        <p key="p-11-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          as the best answer for the interval from index i to index j.
        </p>
        <p key="p-11-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For many interval DP problems, we consider possible split positions k.
        </p>
        <p key="p-11-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The general structure is:
        </p>
        <p key="p-11-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]= \min_&#123;i\le k&lt;j&#125; \left( dp[i][k]+dp[k+1][j]+cost(i,k,j) \right) </span>
        </p>
        <p key="p-11-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For maximization problems, replace minimum with maximum.
        </p>
        <h3 key="h3-11-18" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.2 Matrix Chain Multiplication
        </h3>
        <p key="p-11-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we need to multiply several matrices.
        </p>
        <p key="p-11-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix multiplication is associative:
        </p>
        <p key="p-11-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> (A\times B)\times C = A\times(B\times C) </span>
        </p>
        <p key="p-11-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But the number of scalar operations can be different depending on the order.
        </p>
        <p key="p-11-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-11-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A: 10 × 30 B: 30 × 5 C: 5 × 60
        </p>
        <p key="p-11-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Option 1:
        </p>
        <p key="p-11-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          (A × B) × C
        </p>
        <p key="p-11-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Cost of A × B:
        </p>
        <p key="p-11-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 10\times30\times5=1500 </span>
        </p>
        <p key="p-11-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Result size:
        </p>
        <p key="p-11-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          10 × 5
        </p>
        <p key="p-11-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then multiply by C:
        </p>
        <p key="p-11-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 10\times5\times60=3000 </span>
        </p>
        <p key="p-11-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-11-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 1500+3000=4500 </span>
        </p>
        <p key="p-11-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Option 2:
        </p>
        <p key="p-11-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A × (B × C)
        </p>
        <p key="p-11-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Cost of B × C:
        </p>
        <p key="p-11-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 30\times5\times60=9000 </span>
        </p>
        <p key="p-11-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then multiply A by the result:
        </p>
        <p key="p-11-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 10\times30\times60=18000 </span>
        </p>
        <p key="p-11-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-11-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 27000 </span>
        </p>
        <p key="p-11-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Option 1 is significantly cheaper.
        </p>
        <h3 key="h3-11-44" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.3 DP State
        </h3>
        <p key="p-11-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-11-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j] </span>
        </p>
        <p key="p-11-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the minimum number of scalar multiplications needed to multiply matrices from i through j.
        </p>
        <p key="p-11-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we split at k:
        </p>
        <p key="p-11-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i][j]= \min_&#123;i\le k&lt;j&#125; \left( dp[i][k]+dp[k+1][j] +p[i]p[k+1]p[j+1] \right) </span>
        </p>
        <p key="p-11-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here, the dimension array is:
        </p>
        <p key="p-11-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          p = [10, 30, 5, 60]
        </p>
        <h3 key="h3-11-52" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.4 Java Implementation
        </h3>
        <p key="p-11-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class MatrixChainMultiplication &#123; public static long matrixChain(int[] p) &#123; int n = p.length - 1; long[][] dp = new long[n][n]; // len represents the number of matrices. for (int len = 2; len &lt;= n; len++) &#123; for (int i = 0; i &lt;= n - len; i++) &#123; int j = i + len - 1; dp[i][j] = Long.MAX_VALUE; for (int k = i; k &lt; j; k++) &#123; long cost = dp[i][k] + dp[k + 1][j] + (long) p[i] * p[k + 1] * p[j + 1]; dp[i][j] = Math.min( dp[i][j], cost ); &#125; &#125; &#125; return dp[0][n - 1]; &#125; public static void main(String[] args) &#123; int[] p = &#123;10, 30, 5, 60&#125;; System.out.println(matrixChain(p)); &#125; &#125;
        </p>
        <p key="p-11-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-11-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          4500
        </p>
        <p key="p-11-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-11-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n^3)</span>.
        </p>
        <p key="p-11-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>.
        </p>
        <h3 key="h3-11-59" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          11.5 Burst Balloons
        </h3>
        <p key="p-11-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is another famous interval DP problem.
        </p>
        <p key="p-11-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose:
        </p>
        <p key="p-11-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [3, 1, 5, 8]
        </p>
        <p key="p-11-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When you burst balloon i, you receive:
        </p>
        <p key="p-11-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> leftValue\times currentValue\times rightValue </span>
        </p>
        <p key="p-11-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The challenge is that bursting a balloon changes its neighboring balloons.
        </p>
        <p key="p-11-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A direct left-to-right DP does not capture the dependency easily.
        </p>
        <p key="p-11-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The useful idea is to choose the last balloon to burst in an interval.
        </p>
        <p key="p-11-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          By choosing the last balloon, its two neighboring boundary values are known.
        </p>
        <p key="p-11-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This produces an interval transition similar to:
        </p>
        <p key="p-11-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[l][r]= \max_k \left( dp[l][k-1] +dp[k+1][r] +nums[l-1]\times nums[k]\times nums[r+1] \right) </span>
        </p>
        <p key="p-11-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a classic example of how changing the perspective of a DP state can make a difficult problem manageable.
        </p>
      </div>
    )
  },
  {
    id: 12,
    title: "12. DP Optimization Techniques",
    summary: "Classification of state reduction, rolling buffers, monotonic queues, Convex Hull Trick, and Knuth optimization.",
    content: (
      <div className="space-y-4">
        <p key="p-12-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A standard DP implementation may have unnecessary states, repeated calculations, or excessive memory usage.
        </p>
        <p key="p-12-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP optimization attempts to reduce one or more of these costs without changing the answer.
        </p>
        <p key="p-12-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Major techniques include:
        </p>
        <p key="p-12-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Memoization.
        </p>
        <p key="p-12-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tabulation.
        </p>
        <p key="p-12-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space optimization.
        </p>
        <p key="p-12-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          State compression.
        </p>
        <p key="p-12-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Transition optimization.
        </p>
        <p key="p-12-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Monotonic data structures.
        </p>
        <p key="p-12-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide-and-conquer optimization.
        </p>
        <p key="p-12-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Convex Hull Trick.
        </p>
        <p key="p-12-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knuth optimization.
        </p>
        <h3 key="h3-12-13" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.1 Memoization
        </h3>
        <p key="p-12-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Memoization is top-down DP.
        </p>
        <p key="p-12-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You solve a subproblem recursively and store its result.
        </p>
        <p key="p-12-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-12-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.Arrays; public class FibonacciMemo &#123; static long[] memo; static long fib(int n) &#123; if (n &lt;= 1) &#123; return n; &#125; if (memo[n] != -1) &#123; return memo[n]; &#125; memo[n] = fib(n - 1) + fib(n - 2); return memo[n]; &#125; public static void main(String[] args) &#123; int n = 50; memo = new long[n + 1]; Arrays.fill(memo, -1); System.out.println(fib(n)); &#125; &#125;
        </p>
        <p key="p-12-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time:
        </p>
        <p key="p-12-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n) </span>
        </p>
        <p key="p-12-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space:
        </p>
        <p key="p-12-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n) </span>
        </p>
        <h3 key="h3-12-22" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.2 Tabulation
        </h3>
        <p key="p-12-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tabulation is bottom-up DP.
        </p>
        <p key="p-12-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of recursively solving smaller states, we build the table in a safe computation order.
        </p>
        <p key="p-12-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advantages:
        </p>
        <p key="p-12-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Avoids recursive function-call overhead.
        </p>
        <p key="p-12-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Avoids recursion-stack limitations.
        </p>
        <p key="p-12-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Makes state dependencies explicit.
        </p>
        <h3 key="h3-12-29" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.3 Space Optimization
        </h3>
        <p key="p-12-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many DP states depend only on a small number of previous states.
        </p>
        <p key="p-12-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In such cases, we may not need the entire table.
        </p>
        <p key="p-12-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Fibonacci:
        </p>
        <p key="p-12-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> F(n)=F(n-1)+F(n-2) </span>
        </p>
        <p key="p-12-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We only need two values.
        </p>
        <p key="p-12-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static long fibonacci(int n) &#123; if (n &lt;= 1) &#123; return n; &#125; long prev2 = 0; long prev1 = 1; for (int i = 2; i &lt;= n; i++) &#123; long current = prev1 + prev2; prev2 = prev1; prev1 = current; &#125; return prev1; &#125;
        </p>
        <p key="p-12-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <p key="p-12-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(1)</span>.
        </p>
        <p key="p-12-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a simple example of space-optimized DP.
        </p>
        <h3 key="h3-12-39" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          12.4 Transition Optimization
        </h3>
        <p key="p-12-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sometimes, the number of states is acceptable, but calculating each state is expensive.
        </p>
        <p key="p-12-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <p key="p-12-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[i]=\min_&#123;j&lt;i&#125;(dp[j]+cost(j,i)) </span>
        </p>
        <p key="p-12-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A direct calculation requires checking all previous positions.
        </p>
        <p key="p-12-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This leads to <span className="font-mono text-orange-300 font-semibold">O(n^2)</span> time.
        </p>
        <p key="p-12-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Special properties of cost may allow faster techniques, such as:
        </p>
        <p key="p-12-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Monotonic queues.
        </p>
        <p key="p-12-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Convex Hull Trick.
        </p>
        <p key="p-12-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide-and-conquer optimization.
        </p>
        <p key="p-12-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knuth optimization.
        </p>
        <p key="p-12-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These methods are advanced and have specific applicability conditions.
        </p>
      </div>
    )
  },
  {
    id: 13,
    title: "13. Space Optimization in DP",
    summary: "Compressing 2D tables into 1D reverse-swept arrays (0/1 Knapsack) or 2-row rolling buffers (LCS) in O(N) memory.",
    content: (
      <div className="space-y-4">
        <p key="p-13-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space optimization deserves special attention because it is frequently tested in interviews.
        </p>
        <h3 key="h3-13-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.1 Reducing a Two-Dimensional DP to One Dimension
        </h3>
        <p key="p-13-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider 0/1 Knapsack.
        </p>
        <p key="p-13-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The two-dimensional DP uses:
        </p>
        <p key="p-13-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(nW) </span>
        </p>
        <p key="p-13-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          space.
        </p>
        <p key="p-13-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But every row depends only on the previous row.
        </p>
        <p key="p-13-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          So we can use a one-dimensional array.
        </p>
        <p key="p-13-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-13-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public class KnapsackOptimized &#123; public static int solve( int[] weight, int[] value, int capacity) &#123; int[] dp = new int[capacity + 1]; for (int i = 0; i &lt; weight.length; i++) &#123; for (int w = capacity; w &gt;= weight[i]; w--) &#123; dp[w] = Math.max( dp[w], value[i] + dp[w - weight[i]] ); &#125; &#125; return dp[capacity]; &#125; &#125;
        </p>
        <p key="p-13-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The important detail is the descending loop.
        </p>
        <p key="p-13-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-13-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because every item can be used at most once.
        </p>
        <p key="p-13-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we iterate from lower capacity to higher capacity, we may accidentally reuse the same item multiple times during the same iteration.
        </p>
        <p key="p-13-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For complete/unbounded knapsack, where an item may be reused, the ascending iteration is appropriate.
        </p>
        <h3 key="h3-13-16" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          13.2 LCS Space Optimization
        </h3>
        <p key="p-13-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The standard LCS table uses <span className="font-mono text-orange-300 font-semibold">O(mn)</span> memory.
        </p>
        <p key="p-13-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, each row depends only on:
        </p>
        <p key="p-13-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The previous row.
        </p>
        <p key="p-13-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The current row's previous column.
        </p>
        <p key="p-13-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          So we can use two arrays.
        </p>
        <p key="p-13-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static int lcsOptimized(String a, String b) &#123; int m = a.length(); int n = b.length(); int[] prev = new int[n + 1]; int[] curr = new int[n + 1]; for (int i = 1; i &lt;= m; i++) &#123; for (int j = 1; j &lt;= n; j++) &#123; if (a.charAt(i - 1) == b.charAt(j - 1)) &#123; curr[j] = 1 + prev[j - 1]; &#125; else &#123; curr[j] = Math.max( prev[j], curr[j - 1] ); &#125; &#125; int[] temp = prev; prev = curr; curr = temp; java.util.Arrays.fill(curr, 0); &#125; return prev[n]; &#125;
        </p>
        <p key="p-13-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space complexity becomes:
        </p>
        <p key="p-13-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n) </span>
        </p>
        <p key="p-13-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          instead of:
        </p>
        <p key="p-13-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(mn) </span>
        </p>
        <p key="p-13-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When Is Space Optimization Possible?
        </p>
        <p key="p-13-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When the transition uses only:
        </p>
        <p key="p-13-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The previous state.
        </p>
        <p key="p-13-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The previous row.
        </p>
        <p key="p-13-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A constant number of earlier DP states.
        </p>
        <p key="p-13-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, space optimization may make reconstruction of the actual solution more difficult. If you need to recover the path or selected items, retain additional information or use a reconstruction technique.
        </p>
      </div>
    )
  },
  {
    id: 14,
    title: "14. Divide and Conquer DP Introduction",
    summary: "Accelerating 2D partition recurrences from O(KN²) to O(KN log N) when optimal split positions satisfy monotonicity opt[i] <= opt[i+1].",
    content: (
      <div className="space-y-4">
        <p key="p-14-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide-and-conquer DP optimization is a technique for reducing the time complexity of certain partitioning DP problems.
        </p>
        <p key="p-14-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It becomes useful when a DP recurrence contains a minimum or maximum over many possible previous split positions.
        </p>
        <h3 key="h3-14-3" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.1 General DP Form
        </h3>
        <p key="p-14-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <p key="p-14-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[g][i] = \min_&#123;j&lt;i&#125; \left( dp[g-1][j]+cost(j,i) \right) </span>
        </p>
        <p key="p-14-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where:
        </p>
        <p key="p-14-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          g is the current number of groups.
        </p>
        <p key="p-14-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          i is the endpoint being processed.
        </p>
        <p key="p-14-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          j is the previous partition boundary.
        </p>
        <p key="p-14-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          cost(j, i) is the cost of a partition.
        </p>
        <p key="p-14-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A straightforward algorithm evaluates every possible j.
        </p>
        <p key="p-14-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For n positions and k groups, this often takes:
        </p>
        <p key="p-14-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(kn^2) </span>
        </p>
        <h3 key="h3-14-14" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.2 The Key Optimization Property
        </h3>
        <p key="p-14-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-14-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> opt[g][i] </span>
        </p>
        <p key="p-14-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          be the smallest split position j that produces the optimal answer.
        </p>
        <p key="p-14-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide-and-conquer DP optimization can be applied when optimal split positions are monotonic:
        </p>
        <p key="p-14-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> opt[g][i]\le opt[g][i+1] </span>
        </p>
        <p key="p-14-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This means that the optimal split for a larger endpoint cannot move backwards.
        </p>
        <p key="p-14-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This property must be justified using the problem's cost function. It is not automatically true for every partition DP.
        </p>
        <h3 key="h3-14-22" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.3 How Divide and Conquer Works
        </h3>
        <p key="p-14-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we need to compute DP values for a range of endpoints.
        </p>
        <p key="p-14-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate the midpoint.
        </p>
        <p key="p-14-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find its optimal split by searching the permitted candidate range.
        </p>
        <p key="p-14-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recurse on the left half, restricting optimal splits using the midpoint's optimum.
        </p>
        <p key="p-14-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recurse on the right half using the same monotonicity property.
        </p>
        <p key="p-14-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A conceptual structure:
        </p>
        <p key="p-14-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          compute(left, right, optLeft, optRight) &#123; int mid = (left + right) / 2; // Find the best split for mid. // Recurse on the left half. // Recurse on the right half. &#125;
        </p>
        <h3 key="h3-14-30" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          14.4 Complexity
        </h3>
        <p key="p-14-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Under the usual monotonic-optimum condition, a DP layer can often be computed in:
        </p>
        <p key="p-14-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n\log n) </span>
        </p>
        <p key="p-14-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          leading to:
        </p>
        <p key="p-14-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(kn\log n) </span>
        </p>
        <p key="p-14-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          instead of <span className="font-mono text-orange-300 font-semibold">O(kn^2)</span>.
        </p>
        <p key="p-14-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some specific recurrences permit even tighter bounds.
        </p>
        <p key="p-14-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where Is It Used?
        </p>
        <p key="p-14-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Partitioning arrays into groups.
        </p>
        <p key="p-14-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal segmentation.
        </p>
        <p key="p-14-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Clustering with suitable cost functions.
        </p>
        <p key="p-14-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Certain scheduling problems.
        </p>
        <p key="p-14-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic programming with Monge or quadrangle-inequality properties.
        </p>
        <p key="p-14-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important: Do not use divide-and-conquer optimization simply because a recurrence contains a minimum over split points. First establish the monotonicity property.
        </p>
      </div>
    )
  },
  {
    id: 15,
    title: "15. Meet in the Middle",
    summary: "Splitting an exponential search space of size N into two halves of size N/2 to reduce complexity from O(2ⁿ) to O(N 2^(n/2)).",
    content: (
      <div className="space-y-4">
        <p key="p-15-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Meet in the Middle is an algorithmic technique that splits a problem into two smaller parts, solves each part independently, and then combines the results.
        </p>
        <p key="p-15-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is especially useful for problems involving subsets when the input size is too large for ordinary <span className="font-mono text-orange-300 font-semibold">O(2^n)</span> enumeration, but small enough for approximately <span className="font-mono text-orange-300 font-semibold">O(2^&#123;n/2&#125;)</span> work.
        </p>
        <h3 key="h3-15-3" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.1 Why Do We Need It?
        </h3>
        <p key="p-15-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider Subset Sum.
        </p>
        <p key="p-15-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given:
        </p>
        <p key="p-15-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Array = [3, 7, 2, 9, 4, 6] Target = 15
        </p>
        <p key="p-15-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We need to determine whether some subset has sum equal to 15.
        </p>
        <p key="p-15-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A brute-force algorithm checks:
        </p>
        <p key="p-15-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2^n </span>
        </p>
        <p key="p-15-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          subsets.
        </p>
        <p key="p-15-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For n = 40:
        </p>
        <p key="p-15-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2^&#123;40&#125;\approx1.1\times10^&#123;12&#125; </span>
        </p>
        <p key="p-15-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is too large for straightforward enumeration.
        </p>
        <h3 key="h3-15-14" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.2 Core Idea
        </h3>
        <p key="p-15-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Split the array into two halves.
        </p>
        <p key="p-15-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Original array: [A, B, C, D, E, F] Left half: [A, B, C] Right half: [D, E, F]
        </p>
        <p key="p-15-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Generate all possible subset sums for each half.
        </p>
        <p key="p-15-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each half contains only three elements, so each has:
        </p>
        <p key="p-15-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2^3=8 </span>
        </p>
        <p key="p-15-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          subset sums.
        </p>
        <p key="p-15-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then combine the two sets to find a pair whose sum is the target.
        </p>
        <p key="p-15-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In a larger example with 40 elements, each half has only 20 elements.
        </p>
        <h3 key="h3-15-23" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.3 Algorithm
        </h3>
        <p key="p-15-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Split the array into two halves.
        </p>
        <p key="p-15-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Generate every subset sum of the first half.
        </p>
        <p key="p-15-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Generate every subset sum of the second half.
        </p>
        <p key="p-15-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sort one list.
        </p>
        <p key="p-15-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For each first-half sum s, binary-search for a second-half sum closest to target - s without exceeding it.
        </p>
        <p key="p-15-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Keep the best answer.
        </p>
        <h3 key="h3-15-30" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          15.4 Java Implementation — Maximum Subset Sum Not Exceeding Target
        </h3>
        <p key="p-15-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.*; public class MeetInTheMiddle &#123; private static List&lt;Long&gt; generateSums(int[] arr) &#123; int n = arr.length; List&lt;Long&gt; sums = new ArrayList&lt;&gt;(); long totalMasks = 1L &lt;&lt; n; for (long mask = 0; mask &lt; totalMasks; mask++) &#123; long sum = 0; for (int i = 0; i &lt; n; i++) &#123; if ((mask &amp; (1L &lt;&lt; i)) != 0) &#123; sum += arr[i]; &#125; &#125; sums.add(sum); &#125; return sums; &#125; public static long bestSubsetSum( int[] arr, long target) &#123; int mid = arr.length / 2; int[] left = Arrays.copyOfRange( arr, 0, mid ); int[] right = Arrays.copyOfRange( arr, mid, arr.length ); List&lt;Long&gt; leftSums = generateSums(left); List&lt;Long&gt; rightSums = generateSums(right); Collections.sort(rightSums); long answer = Long.MIN_VALUE; for (long sum : leftSums) &#123; long remaining = target - sum; int index = upperBound(rightSums, remaining) - 1; if (index &gt;= 0) &#123; long candidate = sum + rightSums.get(index); answer = Math.max(answer, candidate); &#125; &#125; return answer; &#125; private static int upperBound( List&lt;Long&gt; arr, long target) &#123; int left = 0; int right = arr.size(); while (left &lt; right) &#123; int mid = left + (right - left) / 2; if (arr.get(mid) &lt;= target) &#123; left = mid + 1; &#125; else &#123; right = mid; &#125; &#125; return left; &#125; &#125;
        </p>
        <p key="p-15-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This implementation returns Long.MIN_VALUE if no subset sum satisfies the target.
        </p>
        <p key="p-15-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-15-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let each half contain approximately <span className="font-mono text-orange-300 font-semibold">n/2</span> elements.
        </p>
        <p key="p-15-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Generate subset sums: <span className="font-mono text-orange-300 font-semibold">O(2^&#123;n/2&#125;\cdot n)</span> in this straightforward implementation.
        </p>
        <p key="p-15-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sort one list: <span className="font-mono text-orange-300 font-semibold">O(2^&#123;n/2&#125;n)</span>.
        </p>
        <p key="p-15-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary searches: <span className="font-mono text-orange-300 font-semibold">O(n2^&#123;n/2&#125;)</span>.
        </p>
        <p key="p-15-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(2^&#123;n/2&#125;)</span>.
        </p>
        <p key="p-15-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The main achievement is replacing exponential work over n elements with work over roughly half the input size.
        </p>
        <p key="p-15-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Applications
        </p>
        <p key="p-15-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subset Sum.
        </p>
        <p key="p-15-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Partition problems.
        </p>
        <p key="p-15-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knapsack variants.
        </p>
        <p key="p-15-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Counting subsets with target properties.
        </p>
        <p key="p-15-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problems involving small-to-medium input sizes and exponential state spaces.
        </p>
        <h4 key="h4-15-46" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 3 — Bit Manipulation and XOR
        </h4>
      </div>
    )
  },
  {
    id: 16,
    title: "16. Bit Manipulation Fundamentals",
    summary: "Six core bitwise operators (&, |, ^, ~, <<, >>, >>>), two's complement sign inversion ~x = -x - 1, and bit shifting nuances.",
    content: (
      <div className="space-y-4">
        <p key="p-16-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit manipulation means operating directly on the binary representation of integers.
        </p>
        <p key="p-16-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Computers represent integer values using bits.
        </p>
        <p key="p-16-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each bit is either:
        </p>
        <p key="p-16-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 or 1
        </p>
        <p key="p-16-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <p key="p-16-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Decimal: 13 Binary: 1101
        </p>
        <p key="p-16-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit manipulation is useful in:
        </p>
        <p key="p-16-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Competitive programming.
        </p>
        <p key="p-16-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP.
        </p>
        <p key="p-16-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Memory-efficient state representation.
        </p>
        <p key="p-16-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Cryptographic building blocks.
        </p>
        <p key="p-16-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Permission systems.
        </p>
        <p key="p-16-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Set operations.
        </p>
        <p key="p-16-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimization problems.
        </p>
        <h3 key="h3-16-15" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.1 Basic Bitwise Operators
        </h3>
        <p key="p-16-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java provides six important bitwise operators.
        </p>
        <div key="table-16-26" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Operator</th>
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">&amp;</td>
                  <td className="p-3">AND</td>
                  <td className="p-3">Bit is 1 when both bits are 1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3">OR</td>
                  <td className="p-3">Bit is 1 when either bit is 1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">^</td>
                  <td className="p-3">XOR</td>
                  <td className="p-3">Bit is 1 when the bits differ</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">~</td>
                  <td className="p-3">NOT</td>
                  <td className="p-3">Inverts all bits</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">&lt;&lt;</td>
                  <td className="p-3">Left shift</td>
                  <td className="p-3">Shifts bits left</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">&gt;&gt;</td>
                  <td className="p-3">Signed right shift</td>
                  <td className="p-3">Shifts right, preserving sign</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">&gt;&gt;&gt;</td>
                  <td className="p-3">Unsigned right shift</td>
                  <td className="p-3">Shifts right, filling with zeroes</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-16-26" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.2 Bitwise AND
        </h3>
        <p key="p-16-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-16-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1101 &amp; 1011 ------ 1001
        </p>
        <p key="p-16-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java:
        </p>
        <p key="p-16-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          int a = 13; int b = 11; System.out.println(a &amp; b);
        </p>
        <p key="p-16-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-16-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          9
        </p>
        <h3 key="h3-16-33" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.3 Bitwise OR
        </h3>
        <p key="p-16-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1101 | 1011 ------ 1111
        </p>
        <p key="p-16-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java:
        </p>
        <p key="p-16-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          System.out.println(13 | 11);
        </p>
        <p key="p-16-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-16-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          15
        </p>
        <h3 key="h3-16-39" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.4 Bitwise XOR
        </h3>
        <p key="p-16-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR returns 1 when the two bits are different.
        </p>
        <p key="p-16-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Truth table:
        </p>
        <p key="p-16-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A
        </p>
        <p key="p-16-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          B
        </p>
        <p key="p-16-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A XOR B
        </p>
        <p key="p-16-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-16-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-16-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-16-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-16-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-16-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-16-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-16-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-16-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-16-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-16-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-16-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-16-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-16-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1101 ^ 1011 ------ 0110
        </p>
        <p key="p-16-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java:
        </p>
        <p key="p-16-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          System.out.println(13 ^ 11);
        </p>
        <p key="p-16-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-16-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          6
        </p>
        <h3 key="h3-16-63" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.5 Bitwise NOT
        </h3>
        <p key="p-16-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          NOT inverts every bit.
        </p>
        <p key="p-16-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 becomes 1 1 becomes 0
        </p>
        <p key="p-16-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java:
        </p>
        <p key="p-16-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          System.out.println(~5);
        </p>
        <p key="p-16-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-16-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          -6
        </p>
        <p key="p-16-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why negative?
        </p>
        <p key="p-16-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java's int uses signed 32-bit two's-complement representation.
        </p>
        <p key="p-16-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For signed integers:
        </p>
        <p key="p-16-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> \sim x=-x-1 </span>
        </p>
        <p key="p-16-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-16-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> \sim5=-6 </span>
        </p>
        <h3 key="h3-16-76" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.6 Left Shift
        </h3>
        <p key="p-16-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          int x = 5; System.out.println(x &lt;&lt; 1);
        </p>
        <p key="p-16-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary:
        </p>
        <p key="p-16-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          00000101
        </p>
        <p key="p-16-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After shifting left once:
        </p>
        <p key="p-16-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          00001010
        </p>
        <p key="p-16-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-16-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          10
        </p>
        <p key="p-16-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For suitable non-overflowing positive values:
        </p>
        <p key="p-16-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> x&lt;&lt;k=x\times2^k </span>
        </p>
        <h3 key="h3-16-86" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          16.7 Right Shift
        </h3>
        <p key="p-16-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          int x = 20; System.out.println(x &gt;&gt; 2);
        </p>
        <p key="p-16-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary:
        </p>
        <p key="p-16-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          00010100
        </p>
        <p key="p-16-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After shifting right twice:
        </p>
        <p key="p-16-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          00000101
        </p>
        <p key="p-16-92" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <p key="p-16-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          5
        </p>
        <p key="p-16-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For nonnegative values, right shift is equivalent to integer division by <span className="font-mono text-orange-300 font-semibold">2^k</span>.
        </p>
        <p key="p-16-95" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For negative numbers, Java's signed right shift preserves the sign bit.
        </p>
      </div>
    )
  },
  {
    id: 17,
    title: "17. Important Bit Manipulation Techniques",
    summary: "Parity checking (n & 1), power of two (n & (n - 1) == 0), Brian Kernighan's set bit count, isolating rightmost bit (n & -n).",
    content: (
      <div className="space-y-4">
        <h3 key="h3-17-1" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.1 Check Whether a Number Is Even or Odd
        </h3>
        <p key="p-17-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The least significant bit determines whether an integer is odd or even.
        </p>
        <p key="p-17-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          if ((n &amp; 1) == 0) &#123; System.out.println("Even"); &#125; else &#123; System.out.println("Odd"); &#125;
        </p>
        <h3 key="h3-17-4" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.2 Check Whether a Number Is a Power of Two
        </h3>
        <p key="p-17-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A positive power of two contains exactly one set bit.
        </p>
        <p key="p-17-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-17-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          8 = 1000
        </p>
        <p key="p-17-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subtracting one:
        </p>
        <p key="p-17-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          7 = 0111
        </p>
        <p key="p-17-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          AND them:
        </p>
        <p key="p-17-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1000 0111 ---- 0000
        </p>
        <p key="p-17-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-17-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> n\&amp;(n-1)=0 </span>
        </p>
        <p key="p-17-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-17-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static boolean isPowerOfTwo(int n) &#123; return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) == 0; &#125;
        </p>
        <h3 key="h3-17-16" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.3 Count Set Bits
        </h3>
        <p key="p-17-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A set bit is a bit containing 1.
        </p>
        <p key="p-17-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-17-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          13 = 1101
        </p>
        <p key="p-17-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are three set bits.
        </p>
        <p key="p-17-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Brian Kernighan's algorithm repeatedly removes the rightmost set bit.
        </p>
        <p key="p-17-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static int countSetBits(int n) &#123; int count = 0; while (n != 0) &#123; n &amp;= (n - 1); count++; &#125; return count; &#125;
        </p>
        <p key="p-17-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-17-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(k) </span>
        </p>
        <p key="p-17-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where k is the number of set bits.
        </p>
        <h3 key="h3-17-26" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.4 Find the Rightmost Set Bit
        </h3>
        <p key="p-17-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use:
        </p>
        <p key="p-17-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> n\&amp;(-n) </span>
        </p>
        <p key="p-17-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-17-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          n = 12 Binary: 1100 n &amp; -n = 0100
        </p>
        <p key="p-17-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java:
        </p>
        <p key="p-17-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          int rightmost = n &amp; -n;
        </p>
        <p key="p-17-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is especially helpful when iterating through subset bits.
        </p>
        <h3 key="h3-17-34" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          17.5 Set, Clear, Toggle and Check a Bit
        </h3>
        <p key="p-17-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we want to manipulate bit position i.
        </p>
        <p key="p-17-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Set a bit:
        </p>
        <p key="p-17-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          n = n | (1 &lt;&lt; i);
        </p>
        <p key="p-17-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Clear a bit:
        </p>
        <p key="p-17-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          n = n &amp; ~(1 &lt;&lt; i);
        </p>
        <p key="p-17-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Toggle a bit:
        </p>
        <p key="p-17-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          n = n ^ (1 &lt;&lt; i);
        </p>
        <p key="p-17-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Check a bit:
        </p>
        <p key="p-17-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          boolean isSet = (n &amp; (1 &lt;&lt; i)) != 0;
        </p>
        <p key="p-17-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For long values, use:
        </p>
        <p key="p-17-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1L &lt;&lt; i
        </p>
        <p key="p-17-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          rather than 1 &lt;&lt; i.
        </p>
        <p key="p-17-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Also, Java masks shift distances: an int shift uses only the lower five bits of the shift distance, while a long shift uses the lower six bits. Be careful when working with positions beyond the usual small bit ranges.
        </p>
      </div>
    )
  },
  {
    id: 18,
    title: "18. XOR Techniques",
    summary: "Self-inverse properties (a ^ a = 0), finding single non-duplicate, partitioning two unique numbers by bitmask, and 4-step periodic XOR sum.",
    content: (
      <div className="space-y-4">
        <p key="p-18-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR has special mathematical properties that make it particularly useful in DSA.
        </p>
        <p key="p-18-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important properties:
        </p>
        <p key="p-18-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> a\oplus0=a </span>
        </p>
        <p key="p-18-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> a\oplus a=0 </span>
        </p>
        <p key="p-18-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> a\oplus b=b\oplus a </span>
        </p>
        <p key="p-18-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> (a\oplus b)\oplus c = a\oplus(b\oplus c) </span>
        </p>
        <p key="p-18-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These allow us to cancel repeated values.
        </p>
        <h3 key="h3-18-8" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.1 Find the Number That Appears Once
        </h3>
        <p key="p-18-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem: Every element appears twice except one element.
        </p>
        <p key="p-18-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the unique element.
        </p>
        <p key="p-18-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-18-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [4, 1, 2, 1, 2]
        </p>
        <p key="p-18-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected answer:
        </p>
        <p key="p-18-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          4
        </p>
        <p key="p-18-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR every element:
        </p>
        <p key="p-18-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 4\oplus1\oplus2\oplus1\oplus2 </span>
        </p>
        <p key="p-18-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because:
        </p>
        <p key="p-18-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 1\oplus1=0 </span>
        </p>
        <p key="p-18-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          and:
        </p>
        <p key="p-18-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2\oplus2=0 </span>
        </p>
        <p key="p-18-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The remaining result is:
        </p>
        <p key="p-18-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 4 </span>
        </p>
        <p key="p-18-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-18-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static int singleNumber(int[] nums) &#123; int answer = 0; for (int num : nums) &#123; answer ^= num; &#125; return answer; &#125;
        </p>
        <p key="p-18-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-18-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <p key="p-18-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(1)</span>.
        </p>
        <h3 key="h3-18-28" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.2 Find Two Numbers That Appear Once
        </h3>
        <p key="p-18-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose:
        </p>
        <p key="p-18-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [2, 4, 7, 9, 2, 4]
        </p>
        <p key="p-18-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two numbers appear once:
        </p>
        <p key="p-18-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          7 and 9
        </p>
        <p key="p-18-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          All other numbers appear twice.
        </p>
        <p key="p-18-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Approach
        </p>
        <p key="p-18-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          First XOR everything:
        </p>
        <p key="p-18-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> xor=7\oplus9 </span>
        </p>
        <p key="p-18-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because 7 and 9 are different, their XOR contains at least one set bit.
        </p>
        <p key="p-18-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use that bit to partition the original array into two groups.
        </p>
        <p key="p-18-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Numbers with that bit set go into one group.
        </p>
        <p key="p-18-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Numbers with that bit unset go into another.
        </p>
        <p key="p-18-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The duplicate pairs cancel within their groups.
        </p>
        <p key="p-18-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-18-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static int[] twoSingleNumbers(int[] nums) &#123; int xor = 0; for (int num : nums) &#123; xor ^= num; &#125; // Isolate the rightmost set bit. int mask = xor &amp; -xor; int first = 0; int second = 0; for (int num : nums) &#123; if ((num &amp; mask) != 0) &#123; first ^= num; &#125; else &#123; second ^= num; &#125; &#125; return new int[] &#123;first, second&#125;; &#125;
        </p>
        <p key="p-18-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-18-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <p key="p-18-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(1)</span>.
        </p>
        <h3 key="h3-18-47" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.3 Find the Missing Number Using XOR
        </h3>
        <p key="p-18-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the array contains values from 0 through n, with one missing.
        </p>
        <p key="p-18-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-18-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [0, 1, 3, 4]
        </p>
        <p key="p-18-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Missing:
        </p>
        <p key="p-18-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          2
        </p>
        <p key="p-18-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR all array elements with all integers from zero through n.
        </p>
        <p key="p-18-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Every present number appears twice and cancels.
        </p>
        <p key="p-18-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static int missingNumber(int[] nums) &#123; int xor = nums.length; for (int i = 0; i &lt; nums.length; i++) &#123; xor ^= i; xor ^= nums[i]; &#125; return xor; &#125;
        </p>
        <h3 key="h3-18-56" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          18.4 XOR of Numbers from 0 Through N
        </h3>
        <p key="p-18-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The XOR pattern repeats every four numbers.
        </p>
        <p key="p-18-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> F(n)= \begin&#123;cases&#125; n &amp; n\bmod4=0\\ 1 &amp; n\bmod4=1\\ n+1 &amp; n\bmod4=2\\ 0 &amp; n\bmod4=3 \end&#123;cases&#125; </span>
        </p>
        <p key="p-18-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java:
        </p>
        <p key="p-18-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static int xorFromZero(int n) &#123; switch (n % 4) &#123; case 0: return n; case 1: return 1; case 2: return n + 1; default: return 0; &#125; &#125;
        </p>
        <p key="p-18-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is useful for solving range-XOR questions.
        </p>
      </div>
    )
  },
  {
    id: 19,
    title: "19. Bitmasking",
    summary: "Permission bit flags, enumerating all 2ⁿ subsets, and submask iteration trick for (sub = mask; sub > 0; sub = (sub - 1) & mask).",
    content: (
      <div className="space-y-4">
        <p key="p-19-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmasking represents a collection of boolean states using one integer.
        </p>
        <p key="p-19-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, suppose there are five permissions:
        </p>
        <p key="p-19-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Read Write Delete Execute Admin
        </p>
        <p key="p-19-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can represent which permissions a user has using five bits.
        </p>
        <p key="p-19-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          10101
        </p>
        <p key="p-19-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This represents the first, third, and fifth permissions.
        </p>
        <p key="p-19-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmasking is also heavily used in:
        </p>
        <p key="p-19-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subset enumeration.
        </p>
        <p key="p-19-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Scheduling.
        </p>
        <p key="p-19-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Game states.
        </p>
        <p key="p-19-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Graph traversal.
        </p>
        <p key="p-19-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP.
        </p>
        <p key="p-19-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          TSP.
        </p>
        <p key="p-19-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          N-Queens optimizations.
        </p>
        <h3 key="h3-19-15" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.1 Enumerating All Subsets
        </h3>
        <p key="p-19-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For an array of size n, there are:
        </p>
        <p key="p-19-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2^n </span>
        </p>
        <p key="p-19-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          possible subsets.
        </p>
        <p key="p-19-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each integer from 0 to 2^n - 1 represents one subset.
        </p>
        <p key="p-19-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-19-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Array = [A, B, C]
        </p>
        <p key="p-19-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mask
        </p>
        <p key="p-19-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary
        </p>
        <p key="p-19-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subset
        </p>
        <p key="p-19-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0
        </p>
        <p key="p-19-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          000
        </p>
        <p key="p-19-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Empty
        </p>
        <p key="p-19-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1
        </p>
        <p key="p-19-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          001
        </p>
        <p key="p-19-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A
        </p>
        <p key="p-19-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          2
        </p>
        <p key="p-19-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          010
        </p>
        <p key="p-19-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          B
        </p>
        <p key="p-19-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3
        </p>
        <p key="p-19-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          011
        </p>
        <p key="p-19-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A, B
        </p>
        <p key="p-19-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          4
        </p>
        <p key="p-19-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          100
        </p>
        <p key="p-19-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          C
        </p>
        <p key="p-19-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          5
        </p>
        <p key="p-19-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          101
        </p>
        <p key="p-19-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A, C
        </p>
        <p key="p-19-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          6
        </p>
        <p key="p-19-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          110
        </p>
        <p key="p-19-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          B, C
        </p>
        <p key="p-19-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          7
        </p>
        <p key="p-19-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          111
        </p>
        <p key="p-19-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A, B, C
        </p>
        <p key="p-19-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-19-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static void printSubsets(int[] arr) &#123; int n = arr.length; int total = 1 &lt;&lt; n; for (int mask = 0; mask &lt; total; mask++) &#123; System.out.print("&#123; "); for (int i = 0; i &lt; n; i++) &#123; if ((mask &amp; (1 &lt;&lt; i)) != 0) &#123; System.out.print(arr[i] + " "); &#125; &#125; System.out.println("&#125;"); &#125; &#125;
        </p>
        <p key="p-19-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-19-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Number of subsets: <span className="font-mono text-orange-300 font-semibold">2^n</span>.
        </p>
        <p key="p-19-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Printing all elements across all subsets: <span className="font-mono text-orange-300 font-semibold">O(n2^n)</span>.
        </p>
        <h3 key="h3-19-54" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.2 Enumerating All Submasks
        </h3>
        <p key="p-19-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose mask represents a set of available items.
        </p>
        <p key="p-19-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want to enumerate every subset contained inside it.
        </p>
        <p key="p-19-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use:
        </p>
        <p key="p-19-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          for (int sub = mask; sub &gt; 0; sub = (sub - 1) &amp; mask) &#123; System.out.println(sub); &#125;
        </p>
        <p key="p-19-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To include the empty subset:
        </p>
        <p key="p-19-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          int sub = mask; while (true) &#123; System.out.println(sub); if (sub == 0) &#123; break; &#125; sub = (sub - 1) &amp; mask; &#125;
        </p>
        <p key="p-19-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is useful in advanced subset DP transitions.
        </p>
        <h3 key="h3-19-62" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          19.3 Bitmasking and DP Connection
        </h3>
        <p key="p-19-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many subset problems define:
        </p>
        <p key="p-19-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[mask] </span>
        </p>
        <p key="p-19-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          as the best result for the set represented by mask.
        </p>
        <p key="p-19-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Others use:
        </p>
        <p key="p-19-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> dp[mask][last] </span>
        </p>
        <p key="p-19-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          to remember both the selected subset and the final element.
        </p>
        <p key="p-19-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is particularly valuable when the problem depends on which elements have already been selected, not the order in which they were selected.
        </p>
        <h4 key="h4-19-70" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 4 — Mathematical Algorithmic Patterns
        </h4>
      </div>
    )
  },
  {
    id: 20,
    title: "20. Mathematical Algorithmic Patterns",
    summary: "Euclidean GCD, LCM, Sieve of Eratosthenes O(N log log N), modular arithmetic, fast binary exponentiation O(log N), and Fermat's inverse.",
    content: (
      <div className="space-y-4">
        <p key="p-20-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematical algorithms are often used to simplify problems that appear computationally expensive.
        </p>
        <p key="p-20-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important topics include:
        </p>
        <p key="p-20-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greatest Common Divisor.
        </p>
        <p key="p-20-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Least Common Multiple.
        </p>
        <p key="p-20-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prime numbers and factorization.
        </p>
        <p key="p-20-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sieve of Eratosthenes.
        </p>
        <p key="p-20-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Modular arithmetic.
        </p>
        <p key="p-20-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fast exponentiation.
        </p>
        <p key="p-20-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Combinatorics.
        </p>
        <p key="p-20-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Number-theoretic properties.
        </p>
        <h3 key="h3-20-11" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.1 Greatest Common Divisor (GCD)
        </h3>
        <p key="p-20-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The GCD of two integers is the largest positive integer that divides both.
        </p>
        <p key="p-20-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-20-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          GCD(24, 36) = 12
        </p>
        <p key="p-20-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Euclidean algorithm uses:
        </p>
        <p key="p-20-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> gcd(a,b)=gcd(b,a\bmod b) </span>
        </p>
        <p key="p-20-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The process continues until the second value becomes zero.
        </p>
        <p key="p-20-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-20-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static long gcd(long a, long b) &#123; a = Math.abs(a); b = Math.abs(b); while (b != 0) &#123; long temp = b; b = a % b; a = temp; &#125; return a; &#125;
        </p>
        <p key="p-20-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-20-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(\log(\min(a,b))) </span>
        </p>
        <p key="p-20-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For arbitrary long values, take care with Math.abs(Long.MIN_VALUE), which cannot be represented as a positive long.
        </p>
        <h3 key="h3-20-23" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.2 Least Common Multiple (LCM)
        </h3>
        <p key="p-20-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          LCM is the smallest positive integer divisible by both numbers.
        </p>
        <p key="p-20-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Relationship:
        </p>
        <p key="p-20-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> LCM(a,b)=\frac&#123;|a\times b|&#125;&#123;GCD(a,b)&#125; </span>
        </p>
        <p key="p-20-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To reduce the chance of overflow, divide before multiplying.
        </p>
        <p key="p-20-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static long lcm(long a, long b) &#123; if (a == 0 || b == 0) &#123; return 0; &#125; return Math.abs((a / gcd(a, b)) * b); &#125;
        </p>
        <p key="p-20-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For large values, the multiplication can still overflow. Use BigInteger when arbitrary precision is required.
        </p>
        <h3 key="h3-20-30" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.3 Sieve of Eratosthenes
        </h3>
        <p key="p-20-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Sieve of Eratosthenes finds all prime numbers up to n.
        </p>
        <p key="p-20-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A prime number is a positive integer greater than one that has exactly two positive divisors.
        </p>
        <p key="p-20-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-20-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          2, 3, 5, 7, 11, 13, 17
        </p>
        <p key="p-20-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Algorithm
        </p>
        <p key="p-20-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initially assume every number is prime.
        </p>
        <p key="p-20-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mark 0 and 1 as non-prime.
        </p>
        <p key="p-20-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Start with the smallest prime, 2.
        </p>
        <p key="p-20-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mark all its multiples as non-prime.
        </p>
        <p key="p-20-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Continue through the square root of n.
        </p>
        <p key="p-20-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-20-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.Arrays; public class Sieve &#123; public static boolean[] sieve(int n) &#123; boolean[] isPrime = new boolean[n + 1]; Arrays.fill(isPrime, true); if (n &gt;= 0) &#123; isPrime[0] = false; &#125; if (n &gt;= 1) &#123; isPrime[1] = false; &#125; for (int i = 2; (long) i * i &lt;= n; i++) &#123; if (isPrime[i]) &#123; for (int j = i * i; j &lt;= n; j += i) &#123; isPrime[j] = false; &#125; &#125; &#125; return isPrime; &#125; &#125;
        </p>
        <p key="p-20-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-20-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n\log\log n)</span>.
        </p>
        <p key="p-20-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <h3 key="h3-20-46" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.4 Modular Arithmetic
        </h3>
        <p key="p-20-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When calculations involve very large numbers, the result may exceed the range of standard integer types.
        </p>
        <p key="p-20-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common technique is to calculate under a modulus.
        </p>
        <p key="p-20-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <p key="p-20-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> (a+b)\bmod m </span>
        </p>
        <p key="p-20-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of storing an enormous number, store its remainder.
        </p>
        <p key="p-20-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important rules:
        </p>
        <p key="p-20-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> (a+b)\bmod m = ((a\bmod m)+(b\bmod m))\bmod m </span>
        </p>
        <p key="p-20-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> (a\times b)\bmod m = ((a\bmod m)(b\bmod m))\bmod m </span>
        </p>
        <p key="p-20-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For negative numbers, Java's % operator can return a negative remainder, so normalize when necessary.
        </p>
        <p key="p-20-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          long normalized = ((x % mod) + mod) % mod;
        </p>
        <h3 key="h3-20-57" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.5 Fast Exponentiation
        </h3>
        <p key="p-20-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we need:
        </p>
        <p key="p-20-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> a^n\bmod m </span>
        </p>
        <p key="p-20-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculating <span className="font-mono text-orange-300 font-semibold">a</span> multiplied by itself n times takes <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <p key="p-20-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary exponentiation reduces this to <span className="font-mono text-orange-300 font-semibold">O(\log n)</span>.
        </p>
        <p key="p-20-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Core Idea
        </p>
        <p key="p-20-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the exponent is even:
        </p>
        <p key="p-20-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> a^n=(a^&#123;n/2&#125;)^2 </span>
        </p>
        <p key="p-20-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the exponent is odd:
        </p>
        <p key="p-20-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> a^n=a\times a^&#123;n-1&#125; </span>
        </p>
        <p key="p-20-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-20-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          public static long modularPower( long base, long exponent, long mod) &#123; if (mod &lt;= 0 || exponent &lt; 0) &#123; throw new IllegalArgumentException(); &#125; long result = 1 % mod; base = ((base % mod) + mod) % mod; while (exponent &gt; 0) &#123; if ((exponent &amp; 1) == 1) &#123; result = (result * base) % mod; &#125; base = (base * base) % mod; exponent &gt;&gt;= 1; &#125; return result; &#125;
        </p>
        <p key="p-20-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This implementation assumes multiplication does not overflow long before taking the remainder. It is safe for many common competitive-programming moduli such as 1,000,000,007, but arbitrary large long moduli require a safe modular multiplication method or BigInteger.
        </p>
        <h3 key="h3-20-70" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.6 Modular Multiplicative Inverse
        </h3>
        <p key="p-20-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A modular inverse of a modulo m is a number x such that:
        </p>
        <p key="p-20-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> (a\times x)\bmod m=1 </span>
        </p>
        <p key="p-20-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An inverse exists exactly when:
        </p>
        <p key="p-20-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> gcd(a,m)=1 </span>
        </p>
        <p key="p-20-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For prime m, Fermat's Little Theorem gives:
        </p>
        <p key="p-20-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> a^&#123;-1&#125;\bmod m=a^&#123;m-2&#125;\bmod m </span>
        </p>
        <p key="p-20-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          provided a is not divisible by m.
        </p>
        <p key="p-20-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is frequently used in combinatorics problems.
        </p>
        <h3 key="h3-20-79" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          20.7 Combinatorics — nCr
        </h3>
        <p key="p-20-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The number of ways to choose r elements from n elements is:
        </p>
        <p key="p-20-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> \binom nr=\frac&#123;n!&#125;&#123;r!(n-r)!&#125; </span>
        </p>
        <p key="p-20-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For large values, we usually calculate combinations modulo a prime.
        </p>
        <p key="p-20-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Precompute factorials:
        </p>
        <p key="p-20-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> fact[i]=i!\bmod m </span>
        </p>
        <p key="p-20-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then:
        </p>
        <p key="p-20-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> nCr= fact[n]\times inverse(fact[r]) \times inverse(fact[n-r]) \bmod m </span>
        </p>
        <p key="p-20-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This gives efficient repeated combination queries after preprocessing.
        </p>
        <p key="p-20-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Applications
        </p>
        <p key="p-20-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Counting arrangements.
        </p>
        <p key="p-20-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subset selection.
        </p>
        <p key="p-20-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Pascal's Triangle.
        </p>
        <p key="p-20-92" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Probability problems.
        </p>
        <p key="p-20-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Counting paths in a grid.
        </p>
        <p key="p-20-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Combinatorial DP.
        </p>
        <h4 key="h4-20-95" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 5 — Randomized Algorithms
        </h4>
      </div>
    )
  },
  {
    id: 21,
    title: "21. Randomized Algorithms Introduction",
    summary: "Las Vegas (always correct, variable time, e.g. Randomized QuickSort) vs Monte Carlo (fixed time, probabilistic error) and Reservoir Sampling.",
    content: (
      <div className="space-y-4">
        <p key="p-21-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A randomized algorithm uses random choices during execution.
        </p>
        <p key="p-21-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its behavior may differ depending on the random choices, even when the input is identical.
        </p>
        <p key="p-21-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomization can help:
        </p>
        <p key="p-21-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Avoid predictable worst-case inputs.
        </p>
        <p key="p-21-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Simplify algorithms.
        </p>
        <p key="p-21-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Obtain expected efficient performance.
        </p>
        <p key="p-21-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Select unbiased samples.
        </p>
        <p key="p-21-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Design probabilistic data structures.
        </p>
        <p key="p-21-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two major types.
        </p>
        <h3 key="h3-21-10" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.1 Las Vegas Algorithms
        </h3>
        <p key="p-21-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A Las Vegas algorithm always produces a correct answer, but its execution time may vary.
        </p>
        <p key="p-21-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-21-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomized QuickSort.
        </p>
        <p key="p-21-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm randomly chooses a pivot.
        </p>
        <p key="p-21-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final sorting result is always correct, but the time complexity depends on the pivot choices.
        </p>
        <p key="p-21-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected time:
        </p>
        <p key="p-21-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n\log n) </span>
        </p>
        <p key="p-21-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Worst-case time:
        </p>
        <p key="p-21-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n^2) </span>
        </p>
        <h3 key="h3-21-20" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.2 Monte Carlo Algorithms
        </h3>
        <p key="p-21-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A Monte Carlo algorithm has a bounded or predictable runtime but may occasionally produce an incorrect or probabilistic result.
        </p>
        <p key="p-21-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm usually has a controllable error probability.
        </p>
        <p key="p-21-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples include:
        </p>
        <p key="p-21-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Probabilistic primality testing.
        </p>
        <p key="p-21-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomized equality testing through hashing.
        </p>
        <p key="p-21-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Certain approximate counting algorithms.
        </p>
        <p key="p-21-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The probability of error can often be reduced by repeating the algorithm with independent random choices.
        </p>
        <h3 key="h3-21-28" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.3 Randomized QuickSort
        </h3>
        <p key="p-21-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          QuickSort selects a pivot, partitions the array, and recursively sorts the partitions.
        </p>
        <p key="p-21-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of always choosing the first element, choose a random pivot.
        </p>
        <p key="p-21-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This reduces the impact of adversarial input arrangements.
        </p>
        <p key="p-21-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Illustrative Java partition structure:
        </p>
        <p key="p-21-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.concurrent.ThreadLocalRandom; public class RandomizedQuickSort &#123; public static void quickSort(int[] arr, int left, int right) &#123; if (left &gt;= right) &#123; return; &#125; int pivotIndex = ThreadLocalRandom.current().nextInt(left, right + 1); swap(arr, pivotIndex, right); int p = partition(arr, left, right); quickSort(arr, left, p - 1); quickSort(arr, p + 1, right); &#125; private static int partition( int[] arr, int left, int right) &#123; int pivot = arr[right]; int i = left; for (int j = left; j &lt; right; j++) &#123; if (arr[j] &lt;= pivot) &#123; swap(arr, i, j); i++; &#125; &#125; swap(arr, i, right); return i; &#125; private static void swap(int[] arr, int i, int j) &#123; int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp; &#125; &#125;
        </p>
        <p key="p-21-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected time:
        </p>
        <p key="p-21-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n\log n) </span>
        </p>
        <p key="p-21-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Worst case:
        </p>
        <p key="p-21-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n^2) </span>
        </p>
        <p key="p-21-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomization improves expected performance; it does not eliminate the theoretical worst case.
        </p>
        <h3 key="h3-21-39" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          21.4 Reservoir Sampling
        </h3>
        <p key="p-21-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reservoir Sampling selects a random element from a stream when the total number of elements is unknown.
        </p>
        <p key="p-21-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we receive millions of numbers but can only store one.
        </p>
        <p key="p-21-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want every element to have an equal probability of being selected.
        </p>
        <p key="p-21-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Algorithm
        </p>
        <p key="p-21-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Select the first element.
        </p>
        <p key="p-21-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For the i-th element, choose it with probability <span className="font-mono text-orange-300 font-semibold">1/i</span>.
        </p>
        <p key="p-21-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Replace the stored element if it is selected.
        </p>
        <p key="p-21-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Java implementation
        </p>
        <p key="p-21-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          import java.util.Random; public class ReservoirSampling &#123; public static int sample(int[] stream) &#123; if (stream.length == 0) &#123; throw new IllegalArgumentException("Empty stream"); &#125; Random random = new Random(); int selected = stream[0]; for (int i = 1; i &lt; stream.length; i++) &#123; int probabilityRange = i + 1; if (random.nextInt(probabilityRange) == 0) &#123; selected = stream[i]; &#125; &#125; return selected; &#125; &#125;
        </p>
        <p key="p-21-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <p key="p-21-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.
        </p>
        <p key="p-21-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Auxiliary space: <span className="font-mono text-orange-300 font-semibold">O(1)</span>.
        </p>
        <p key="p-21-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each element has an equal probability of <span className="font-mono text-orange-300 font-semibold">1/n</span> of being selected.
        </p>
        <p key="p-21-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where Randomized Algorithms Are Used
        </p>
        <p key="p-21-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomized sorting.
        </p>
        <p key="p-21-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sampling large datasets.
        </p>
        <p key="p-21-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Approximate algorithms.
        </p>
        <p key="p-21-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Probabilistic primality tests.
        </p>
        <p key="p-21-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Hashing.
        </p>
        <p key="p-21-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomized graph algorithms.
        </p>
        <p key="p-21-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Load balancing and randomized selection.
        </p>
        <h4 key="h4-21-61" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 6 — Complexity and Correctness Proofs
        </h4>
      </div>
    )
  },
  {
    id: 22,
    title: "22. Complexity Analysis of Advanced Algorithms",
    summary: "Master complexity formulation (States x Transitions), comprehensive reference matrix, and analyzing exponential growth.",
    content: (
      <div className="space-y-4">
        <p key="p-22-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced algorithms are not only about finding correct answers. They are also about understanding how the running time and memory requirements grow.
        </p>
        <h3 key="h3-22-2" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          22.1 DP Complexity
        </h3>
        <p key="p-22-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The typical complexity can be estimated using:
        </p>
        <p key="p-22-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> \text&#123;Number of states&#125; \times \text&#123;Transitions per state&#125; </span>
        </p>
        <p key="p-22-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: LCS.
        </p>
        <p key="p-22-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Number of states:
        </p>
        <p key="p-22-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(mn) </span>
        </p>
        <p key="p-22-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Transitions per state:
        </p>
        <p key="p-22-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(1) </span>
        </p>
        <p key="p-22-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-22-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(mn) </span>
        </p>
        <p key="p-22-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: TSP Bitmask DP.
        </p>
        <p key="p-22-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Number of states:
        </p>
        <p key="p-22-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n2^n) </span>
        </p>
        <p key="p-22-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Transitions per state:
        </p>
        <p key="p-22-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n) </span>
        </p>
        <p key="p-22-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-22-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n^2 2^n) </span>
        </p>
        <p key="p-22-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Matrix Chain Multiplication.
        </p>
        <p key="p-22-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Number of states:
        </p>
        <p key="p-22-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n^2) </span>
        </p>
        <p key="p-22-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Transitions per state:
        </p>
        <p key="p-22-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n) </span>
        </p>
        <p key="p-22-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-22-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> O(n^3) </span>
        </p>
        <p key="p-22-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is one of the most reliable ways to calculate DP complexity.
        </p>
        <h3 key="h3-22-27" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          22.2 Complexity Comparison
        </h3>
        <p key="p-22-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Algorithm
        </p>
        <p key="p-22-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Time
        </p>
        <p key="p-22-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Auxiliary space
        </p>
        <p key="p-22-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          LCS
        </p>
        <p key="p-22-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-22-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-22-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit Distance
        </p>
        <p key="p-22-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-22-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-22-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Palindromic Subsequence
        </p>
        <p key="p-22-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>
        </p>
        <p key="p-22-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>
        </p>
        <p key="p-22-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Grid DP
        </p>
        <p key="p-22-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-22-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-22-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP
        </p>
        <p key="p-22-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-22-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(h)</span>
        </p>
        <p key="p-22-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DAG DP
        </p>
        <p key="p-22-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>
        </p>
        <p key="p-22-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(V)</span>
        </p>
        <p key="p-22-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP
        </p>
        <p key="p-22-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Usually exponential
        </p>
        <p key="p-22-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Depends on state count
        </p>
        <p key="p-22-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          TSP Bitmask DP
        </p>
        <p key="p-22-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2 2^n)</span>
        </p>
        <p key="p-22-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n2^n)</span>
        </p>
        <p key="p-22-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Digit DP
        </p>
        <p key="p-22-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(DK\times10)</span> for the illustrated digit-sum problem
        </p>
        <p key="p-22-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(DK)</span>
        </p>
        <p key="p-22-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix Chain Multiplication
        </p>
        <p key="p-22-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^3)</span>
        </p>
        <p key="p-22-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>
        </p>
        <p key="p-22-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Meet in the Middle
        </p>
        <p key="p-22-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typically <span className="font-mono text-orange-300 font-semibold">O(n2^&#123;n/2&#125;)</span> here
        </p>
        <p key="p-22-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(2^&#123;n/2&#125;)</span>
        </p>
        <p key="p-22-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sieve of Eratosthenes
        </p>
        <p key="p-22-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n\log\log n)</span>
        </p>
        <p key="p-22-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-22-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fast Exponentiation
        </p>
        <p key="p-22-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(\log n)</span>
        </p>
        <p key="p-22-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(1)</span> iterative
        </p>
        <p key="p-22-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reservoir Sampling
        </p>
        <p key="p-22-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-22-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(1)</span>
        </p>
        <h3 key="h3-22-73" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          22.3 Understanding Exponential Complexity
        </h3>
        <p key="p-22-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some problems do not have known polynomial-time exact algorithms.
        </p>
        <p key="p-22-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <p key="p-22-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Traveling Salesman Problem.
        </p>
        <p key="p-22-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          General Subset Sum.
        </p>
        <p key="p-22-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many combinatorial optimization problems.
        </p>
        <p key="p-22-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important complexity classes:
        </p>
        <p key="p-22-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity
        </p>
        <p key="p-22-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Meaning
        </p>
        <p key="p-22-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(1)</span>
        </p>
        <p key="p-22-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Constant
        </p>
        <p key="p-22-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(\log n)</span>
        </p>
        <p key="p-22-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Logarithmic
        </p>
        <p key="p-22-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-22-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Linear
        </p>
        <p key="p-22-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n\log n)</span>
        </p>
        <p key="p-22-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Linearithmic
        </p>
        <p key="p-22-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>
        </p>
        <p key="p-22-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Quadratic
        </p>
        <p key="p-22-92" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^3)</span>
        </p>
        <p key="p-22-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Cubic
        </p>
        <p key="p-22-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(2^n)</span>
        </p>
        <p key="p-22-95" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Exponential
        </p>
        <p key="p-22-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n!)</span>
        </p>
        <p key="p-22-97" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Factorial
        </p>
        <p key="p-22-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A solution that is practical for n = 20 may be unusable for n = 1000.
        </p>
        <p key="p-22-99" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Always check the input constraints before choosing a technique.
        </p>
      </div>
    )
  },
  {
    id: 23,
    title: "23. Correctness Proofs",
    summary: "Mathematical induction for DP, loop invariants (initialization, maintenance, termination), greedy exchange arguments, and randomized probability bounds.",
    content: (
      <div className="space-y-4">
        <p key="p-23-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A correctness proof explains why an algorithm always returns the correct result.
        </p>
        <p key="p-23-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Writing code that works for sample inputs is not sufficient.
        </p>
        <p key="p-23-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An algorithm should be correct for every valid input covered by its assumptions.
        </p>
        <p key="p-23-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are several common proof techniques.
        </p>
        <h3 key="h3-23-5" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          23.1 Mathematical Induction
        </h3>
        <p key="p-23-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Induction is especially useful for DP algorithms.
        </p>
        <p key="p-23-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It has three components:
        </p>
        <p key="p-23-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Base case.
        </p>
        <p key="p-23-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Inductive hypothesis.
        </p>
        <p key="p-23-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Inductive step.
        </p>
        <p key="p-23-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Fibonacci DP
        </p>
        <p key="p-23-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We define:
        </p>
        <p key="p-23-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> F(0)=0 </span>
        </p>
        <p key="p-23-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> F(1)=1 </span>
        </p>
        <p key="p-23-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> F(n)=F(n-1)+F(n-2) </span>
        </p>
        <p key="p-23-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Base case:
        </p>
        <p key="p-23-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The DP correctly initializes:
        </p>
        <p key="p-23-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(0) = 0 F(1) = 1
        </p>
        <p key="p-23-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Inductive hypothesis:
        </p>
        <p key="p-23-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Assume the algorithm correctly calculates all values before n.
        </p>
        <p key="p-23-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Inductive step:
        </p>
        <p key="p-23-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The recurrence uses the two previously correct values:
        </p>
        <p key="p-23-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> F(n-1)+F(n-2) </span>
        </p>
        <p key="p-23-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore it produces the correct F(n).
        </p>
        <p key="p-23-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Hence, by induction, the algorithm correctly computes all Fibonacci values.
        </p>
        <h3 key="h3-23-26" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          23.2 DP Correctness Proof
        </h3>
        <p key="p-23-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A typical DP proof follows this structure:
        </p>
        <p key="p-23-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Explain what the state means.
        </p>
        <p key="p-23-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Show that the base states are correct.
        </p>
        <p key="p-23-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prove that the transition considers all valid choices.
        </p>
        <p key="p-23-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prove that no invalid choice is included.
        </p>
        <p key="p-23-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Establish that the computation order ensures dependencies are already correct.
        </p>
        <p key="p-23-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Conclude that the final state represents the required answer.
        </p>
        <p key="p-23-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, in 0/1 Knapsack:
        </p>
        <p key="p-23-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At every item, the only possibilities are:
        </p>
        <p key="p-23-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not choose the item.
        </p>
        <p key="p-23-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Choose the item, provided it fits.
        </p>
        <p key="p-23-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The recurrence compares both possibilities, so it considers every valid selection.
        </p>
        <p key="p-23-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because each item moves from the previous row to the current row only once, no item is accidentally reused in the two-dimensional formulation.
        </p>
        <p key="p-23-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, the recurrence calculates the optimum over all permitted selections.
        </p>
        <h3 key="h3-23-41" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          23.3 Loop Invariants
        </h3>
        <p key="p-23-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A loop invariant is a statement that remains true before and after each loop iteration.
        </p>
        <p key="p-23-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a sorting algorithm, an invariant might state:
        </p>
        <p key="p-23-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before each iteration, the already processed portion contains elements in sorted order.
        </p>
        <p key="p-23-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To prove a loop invariant:
        </p>
        <p key="p-23-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initialization: Show it is true before the first iteration.
        </p>
        <p key="p-23-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maintenance: Show that one iteration preserves it.
        </p>
        <p key="p-23-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Termination: Show that when the loop finishes, the invariant proves the desired result.
        </p>
        <p key="p-23-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Loop invariants are particularly useful for:
        </p>
        <p key="p-23-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two pointers.
        </p>
        <p key="p-23-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sliding windows.
        </p>
        <p key="p-23-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary search.
        </p>
        <p key="p-23-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy algorithms.
        </p>
        <p key="p-23-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sorting.
        </p>
        <p key="p-23-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Array processing.
        </p>
        <h3 key="h3-23-56" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          23.4 Exchange Argument
        </h3>
        <p key="p-23-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An exchange argument is commonly used to prove greedy algorithms.
        </p>
        <p key="p-23-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The basic idea:
        </p>
        <p key="p-23-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose an optimal solution does not use the greedy algorithm's selected choice.
        </p>
        <p key="p-23-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Show that replacing part of the optimal solution with the greedy choice does not make the solution worse.
        </p>
        <p key="p-23-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If this exchange can always be done, the greedy choice is safe.
        </p>
        <p key="p-23-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This technique is important for understanding:
        </p>
        <p key="p-23-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prim's algorithm.
        </p>
        <p key="p-23-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Kruskal's algorithm.
        </p>
        <p key="p-23-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Activity selection.
        </p>
        <p key="p-23-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval scheduling.
        </p>
        <p key="p-23-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some scheduling and optimization algorithms.
        </p>
        <h3 key="h3-23-68" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          23.5 Randomized Algorithm Correctness
        </h3>
        <p key="p-23-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For randomized algorithms, correctness may involve probability.
        </p>
        <p key="p-23-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, Reservoir Sampling must show that every stream element has the same probability of remaining selected.
        </p>
        <p key="p-23-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A probability-based proof is different from a standard deterministic proof.
        </p>
        <p key="p-23-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You need to calculate:
        </p>
        <p key="p-23-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The probability that an element is initially selected.
        </p>
        <p key="p-23-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The probability that it survives all subsequent replacement decisions.
        </p>
        <p key="p-23-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final probability after all elements have been processed.
        </p>
        <h3 key="h3-23-76" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          23.6 A Complete Algorithm Proof Template
        </h3>
        <p key="p-23-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When answering an advanced DSA question in an interview or written examination, use this structure:
        </p>
        <ol key="ol-23-79" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Algorithm description 2. State definition or invariant 3. Base conditions 4. Transition or operation 5. Correctness proof 6. Termination 7. Time complexity 8. Space complexity</li>
      </ol>
        <p key="p-23-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Being able to explain these eight points is a strong indicator that you understand the algorithm rather than simply remembering its implementation.
        </p>
        <h4 key="h4-23-80" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 7 — Putting the Techniques Together
        </h4>
      </div>
    )
  },
  {
    id: 24,
    title: "24. Choosing the Correct Advanced Technique",
    summary: "Problem-to-algorithm decision matrix and recognizing signals in problem descriptions.",
    content: (
      <div className="space-y-4">
        <p key="p-24-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many advanced problems can be solved using more than one algorithmic approach.
        </p>
        <p key="p-24-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The goal is to select the most appropriate method based on the constraints and problem structure.
        </p>
        <p key="p-24-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem requirement
        </p>
        <p key="p-24-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Technique
        </p>
        <p key="p-24-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multiple resource constraints
        </p>
        <p key="p-24-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multidimensional DP
        </p>
        <p key="p-24-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count paths in a grid
        </p>
        <p key="p-24-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Grid DP
        </p>
        <p key="p-24-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          String conversion operations
        </p>
        <p key="p-24-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit Distance
        </p>
        <p key="p-24-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Palindromic subsequence
        </p>
        <p key="p-24-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval/String DP
        </p>
        <p key="p-24-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimization on a tree
        </p>
        <p key="p-24-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP
        </p>
        <p key="p-24-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimization on an acyclic graph
        </p>
        <p key="p-24-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DAG DP
        </p>
        <p key="p-24-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Small number of selected elements
        </p>
        <p key="p-24-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP
        </p>
        <p key="p-24-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Visit every city exactly once
        </p>
        <p key="p-24-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          TSP Bitmask DP
        </p>
        <p key="p-24-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count numbers satisfying digit constraints
        </p>
        <p key="p-24-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Digit DP
        </p>
        <p key="p-24-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimize a contiguous interval
        </p>
        <p key="p-24-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval DP
        </p>
        <p key="p-24-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reduce memory in DP
        </p>
        <p key="p-24-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space optimization
        </p>
        <p key="p-24-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Monotonic optimal split positions
        </p>
        <p key="p-24-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide-and-conquer DP
        </p>
        <p key="p-24-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Exponential subset problem with around 40 elements
        </p>
        <p key="p-24-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Meet in the Middle
        </p>
        <p key="p-24-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Check and modify individual bits
        </p>
        <p key="p-24-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit manipulation
        </p>
        <p key="p-24-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find unique elements under XOR constraints
        </p>
        <p key="p-24-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR
        </p>
        <p key="p-24-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Enumerate possible selections
        </p>
        <p key="p-24-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmasking
        </p>
        <p key="p-24-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Large integer calculations
        </p>
        <p key="p-24-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Modular arithmetic
        </p>
        <p key="p-24-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Select a uniform random stream element
        </p>
        <p key="p-24-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reservoir Sampling
        </p>
        <p key="p-24-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prove an optimal recursive recurrence
        </p>
        <p key="p-24-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Induction
        </p>
        <p key="p-24-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prove a greedy choice
        </p>
        <p key="p-24-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Exchange argument
        </p>
        <h3 key="h3-24-45" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          24.1 How to Recognize Advanced DP Problems
        </h3>
        <p key="p-24-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Look for these signals in problem statements:
        </p>
        <p key="p-24-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multiple independent constraints
        </p>
        <p key="p-24-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Maximum profit with weight and volume limits.
        </p>
        <p key="p-24-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Potential approach: Multidimensional DP.
        </p>
        <p key="p-24-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A decision involving a contiguous range
        </p>
        <p key="p-24-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Find the minimum cost to divide an interval.
        </p>
        <p key="p-24-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Potential approach: Interval DP.
        </p>
        <p key="p-24-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A subset of a small number of elements
        </p>
        <p key="p-24-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Visit every city exactly once.
        </p>
        <p key="p-24-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Potential approach: Bitmask DP.
        </p>
        <p key="p-24-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A numerical range with digit restrictions
        </p>
        <p key="p-24-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Count integers below one billion whose digits have a specified property.
        </p>
        <p key="p-24-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Potential approach: Digit DP.
        </p>
        <p key="p-24-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A problem with exponential complexity but input around 40
        </p>
        <p key="p-24-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Potential approach: Meet in the Middle.
        </p>
        <p key="p-24-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Repeated optimization over a sequence of previous split positions
        </p>
        <p key="p-24-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Potential approach: Investigate divide-and-conquer DP or other transition optimizations.
        </p>
        <h4 key="h4-24-63" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Part 8 — Advanced Interview Practice
        </h4>
      </div>
    )
  },
  {
    id: 25,
    title: "25. Practice Problems by Difficulty",
    summary: "Curated 35-problem roadmap across 4 levels: Advanced DP Foundations, Tree & Graph DP, Advanced State DP, and Optimization.",
    content: (
      <div className="space-y-4">
        <p key="p-25-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These problems are designed to test both algorithm recognition and implementation.
        </p>
        <p key="p-25-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Level 1 — Advanced DP Foundations
        </p>
        <p key="p-25-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Unique Paths.
        </p>
        <p key="p-25-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Unique Paths with Obstacles.
        </p>
        <p key="p-25-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum Path Sum.
        </p>
        <p key="p-25-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum Path Sum in a Grid.
        </p>
        <p key="p-25-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Common Subsequence.
        </p>
        <p key="p-25-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Common Substring.
        </p>
        <p key="p-25-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit Distance.
        </p>
        <p key="p-25-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Palindromic Subsequence.
        </p>
        <p key="p-25-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Distinct Subsequences.
        </p>
        <p key="p-25-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Regular Expression Matching.
        </p>
        <p key="p-25-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Level 2 — Tree and Graph DP
        </p>
        <p key="p-25-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          House Robber III.
        </p>
        <p key="p-25-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Binary Tree Maximum Path Sum.
        </p>
        <p key="p-25-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Diameter of a Tree.
        </p>
        <p key="p-25-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum Independent Set on a Tree.
        </p>
        <p key="p-25-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Path in a DAG.
        </p>
        <p key="p-25-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Shortest Path in a DAG.
        </p>
        <p key="p-25-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Counting Paths in a DAG.
        </p>
        <p key="p-25-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum Weight Independent Set on a Tree.
        </p>
        <p key="p-25-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Level 3 — Advanced State DP
        </p>
        <p key="p-25-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Traveling Salesman Problem.
        </p>
        <p key="p-25-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum Cost to Visit All Cities.
        </p>
        <p key="p-25-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Partition to K Equal Sum Subsets.
        </p>
        <p key="p-25-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Shortest Path Visiting All Nodes.
        </p>
        <p key="p-25-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count Numbers with Digit Sum K.
        </p>
        <p key="p-25-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count Numbers with No Repeated Digits.
        </p>
        <p key="p-25-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Digit DP with Divisibility Constraints.
        </p>
        <p key="p-25-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix Chain Multiplication.
        </p>
        <p key="p-25-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Burst Balloons.
        </p>
        <p key="p-25-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum Cost to Cut a Stick.
        </p>
        <p key="p-25-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Level 4 — DP Optimization and Algorithm Design
        </p>
        <p key="p-25-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subset Sum using Meet in the Middle.
        </p>
        <p key="p-25-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Closest Subsequence Sum.
        </p>
        <p key="p-25-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide-and-Conquer DP Optimization.
        </p>
        <p key="p-25-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP with Monotonic Queue Optimization.
        </p>
        <p key="p-25-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Convex Hull Trick DP.
        </p>
        <p key="p-25-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knuth Optimization.
        </p>
        <p key="p-25-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space-Optimized Knapsack.
        </p>
        <p key="p-25-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space-Optimized LCS.
        </p>
        <p key="p-25-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced Bitmask DP.
        </p>
        <p key="p-25-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomized QuickSort.
        </p>
        <p key="p-25-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reservoir Sampling.
        </p>
        <p key="p-25-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Modular Combinatorics.
        </p>
        <h3 key="h3-25-46" className="text-lg md:text-xl font-bold text-orange-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          25.1 Particularly Important Interview Problems
        </h3>
        <p key="p-25-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [How LeetCode 221 taught me discipline over syntax | Raju Sunagar posted on the topic | LinkedIn](https://images.openai.com/static-rsc-4/dygMxlzUtSPALbPWMWXI-4ja8K52G_zU9fo7_F7gZHsfJMbbELonB-Kn8tqA-PylERlLEQHSV8T491Nns9oEnVw3xgGKdiPnfCskqviaeJm73VmCdPEgb_HrhktJa5r4anaw3Akc0YQo6rk_c3BqEu88ktyR6AV0JfIUCjRY8yQ?purpose=inline)
        </p>
        <p key="p-25-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced Dynamic Programming
        </p>
        <p key="p-25-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          LCS, Edit Distance, LPS, Burst Balloons, Matrix Chain Multiplication
        </p>
        <p key="p-25-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [Efficient Encoding of the Traveling Salesperson Problem on a Quantum Computer | MDPI](https://images.openai.com/static-rsc-4/wLqlkpedBxReXuUzXsmj3u9ftvo2tFbqe4gTKCvPUuIxEZdu_W_cxKYLycS3lWYLvFYP4znjY3VnAVHqqS7f-SdoEd6wu18z_0sSsQhVS7BFcgLL9yuhdFT-X3JVJ-_leMpQRO5rruOc7X9X0hzZVkkJbhkDMjF7HRbQDnW1Nd4?purpose=inline)
        </p>
        <p key="p-25-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP and TSP
        </p>
        <p key="p-25-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Shortest Path Visiting All Nodes, TSP, Partition to K Equal Subsets
        </p>
        <p key="p-25-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [Bit Manipulation Tricks Reference Cheat Sheet | LivePhysics™](https://images.openai.com/static-rsc-4/moIab1iGsL8sX36HNJlfuZehVKY-AVtd8TGoHYRDEWH6F1JB0pT8yrHfpD_ZWjzXkLOKjoaKUDkl_l5UsIwmH7kA7an7FvoOb16lRt89e1qQfX4fdJk5rD5O_z6Go3RRm1I9EHIa0atRc5UNp4D1yJnPuvcYN-nEYPIMS5YDltQ?purpose=inline)
        </p>
        <p key="p-25-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit Manipulation
        </p>
        <p key="p-25-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Single Number, Single Number III, Missing Number, Subset Enumeration
        </p>
        <p key="p-25-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [Math: Modular Arithmetic Infographic | LivePhysics™](https://images.openai.com/static-rsc-4/B5PrXL_D48M9x_zGD4PuxtncMCDR6Wker0Svm8SnImZJuzmUs0bimRR4y8RZ8QLTbTB8ZCo6JAkY369sEKdyR91I3x482Y_8xaanyjvhja7aKvp_sG0eCGf90KycjkwnIRGqtZQYuO9hdH3yz5G6HIZ8YqVklhmsdPFPbcQuf5A?purpose=inline)
        </p>
        <p key="p-25-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematical Algorithms
        </p>
        <p key="p-25-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          GCD, Sieve, Modular Exponentiation, Combinatorics
        </p>
        <p key="p-25-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Useful coding references:
        </p>
        <p key="p-25-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [LeetCode — Problem Set](https://leetcode.com/problemset/?utm_source=chatgpt.com)
        </p>
        <p key="p-25-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [CSES — Competitive Programming Problem Set](https://cses.fi/problemset/?utm_source=chatgpt.com)
        </p>
        <p key="p-25-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [CP-Algorithms — Advanced Algorithm Explanations](https://cp-algorithms.com/?utm_source=chatgpt.com)
        </p>
        <p key="p-25-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          [AtCoder — Programming Contests](https://atcoder.jp/contests/?utm_source=chatgpt.com)
        </p>
      </div>
    )
  },
  {
    id: 26,
    title: "26. Complexity Comparison — Complete Module",
    summary: "Consolidated reference table of time and auxiliary space complexities across all 20 module topics.",
    content: (
      <div className="space-y-4">
        <p key="p-26-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Topic
        </p>
        <p key="p-26-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical time complexity
        </p>
        <p key="p-26-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space complexity
        </p>
        <p key="p-26-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multidimensional Knapsack
        </p>
        <p key="p-26-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(nWV)</span>
        </p>
        <p key="p-26-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(nWV)</span>
        </p>
        <p key="p-26-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Grid DP
        </p>
        <p key="p-26-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-26-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-26-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          LCS
        </p>
        <p key="p-26-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-26-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-26-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit Distance
        </p>
        <p key="p-26-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-26-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(mn)</span>
        </p>
        <p key="p-26-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Palindromic Subsequence
        </p>
        <p key="p-26-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>
        </p>
        <p key="p-26-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>
        </p>
        <p key="p-26-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP
        </p>
        <p key="p-26-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-26-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(h)</span>
        </p>
        <p key="p-26-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DAG DP
        </p>
        <p key="p-26-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(V+E)</span>
        </p>
        <p key="p-26-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(V)</span>
        </p>
        <p key="p-26-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP
        </p>
        <p key="p-26-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem-dependent, often <span className="font-mono text-orange-300 font-semibold">O(n2^n)</span> or <span className="font-mono text-orange-300 font-semibold">O(n^22^n)</span>
        </p>
        <p key="p-26-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem-dependent
        </p>
        <p key="p-26-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          TSP Bitmask DP
        </p>
        <p key="p-26-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^22^n)</span>
        </p>
        <p key="p-26-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n2^n)</span>
        </p>
        <p key="p-26-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Digit DP
        </p>
        <p key="p-26-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(DK\times10)</span> in the example
        </p>
        <p key="p-26-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(DK)</span>
        </p>
        <p key="p-26-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval DP
        </p>
        <p key="p-26-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Often <span className="font-mono text-orange-300 font-semibold">O(n^3)</span>
        </p>
        <p key="p-26-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n^2)</span>
        </p>
        <p key="p-26-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two-row DP optimization
        </p>
        <p key="p-26-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Same time as original DP
        </p>
        <p key="p-26-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reduced memory
        </p>
        <p key="p-26-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide-and-conquer DP
        </p>
        <p key="p-26-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Often <span className="font-mono text-orange-300 font-semibold">O(kn\log n)</span>
        </p>
        <p key="p-26-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typically <span className="font-mono text-orange-300 font-semibold">O(n)</span> per layer, depending on implementation
        </p>
        <p key="p-26-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Meet in the Middle
        </p>
        <p key="p-26-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n2^&#123;n/2&#125;)</span> in the example
        </p>
        <p key="p-26-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(2^&#123;n/2&#125;)</span>
        </p>
        <p key="p-26-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit manipulation
        </p>
        <p key="p-26-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Usually <span className="font-mono text-orange-300 font-semibold">O(1)</span> per operation
        </p>
        <p key="p-26-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(1)</span>
        </p>
        <p key="p-26-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          GCD
        </p>
        <p key="p-26-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(\log n)</span>
        </p>
        <p key="p-26-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(1)</span> iterative
        </p>
        <p key="p-26-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sieve
        </p>
        <p key="p-26-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n\log\log n)</span>
        </p>
        <p key="p-26-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-26-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Modular exponentiation
        </p>
        <p key="p-26-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(\log n)</span>
        </p>
        <p key="p-26-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(1)</span> iterative
        </p>
        <p key="p-26-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomized QuickSort
        </p>
        <p key="p-26-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected <span className="font-mono text-orange-300 font-semibold">O(n\log n)</span>
        </p>
        <p key="p-26-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected <span className="font-mono text-orange-300 font-semibold">O(\log n)</span> stack for balanced recursion; worst <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-26-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reservoir Sampling
        </p>
        <p key="p-26-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(n)</span>
        </p>
        <p key="p-26-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold">O(1)</span>
        </p>
      </div>
    )
  },
  {
    id: 27,
    title: "27. Common Mistakes and Interview Traps",
    summary: "14 critical implementation pitfalls: overcomplicating dimensions, backward vs forward loops, forgetting TSP return edges, and integer overflow.",
    content: (
      <div className="space-y-4">
        <ol key="ol-27-2" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Defining a DP state without understanding what it represents.</li>
      </ol>
        <p key="p-27-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before writing code, explain the meaning of every dimension.
        </p>
        <ol key="ol-27-4" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Creating too many dimensions.</li>
      </ol>
        <p key="p-27-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Every additional dimension increases memory and transition complexity.
        </p>
        <ol key="ol-27-6" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Using the wrong computation order.</li>
      </ol>
        <p key="p-27-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For interval DP, small intervals must generally be calculated before larger intervals.
        </p>
        <p key="p-27-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For DAG DP, process the vertices in topological order.
        </p>
        <ol key="ol-27-9" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Confusing subsequences with substrings.</li>
      </ol>
        <p key="p-27-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Substrings are contiguous. Subsequences are not necessarily contiguous.
        </p>
        <ol key="ol-27-11" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Incorrect knapsack loop direction.</li>
      </ol>
        <p key="p-27-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For 0/1 knapsack, iterate capacity backwards in the one-dimensional optimization.
        </p>
        <p key="p-27-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For unbounded knapsack, the conventional ascending iteration allows reuse.
        </p>
        <ol key="ol-27-14" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Using bitmasks for excessively large input sizes.</li>
      </ol>
        <p key="p-27-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The number of masks grows exponentially:
        </p>
        <p key="p-27-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <span className="font-mono text-orange-300 font-semibold"> 2^n </span>
        </p>
        <ol key="ol-27-17" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Incorrect TSP base state.</li>
      </ol>
        <p key="p-27-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The initial state must represent the starting city as already visited.
        </p>
        <ol key="ol-27-19" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Forgetting the return trip in TSP.</li>
      </ol>
        <p key="p-27-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A complete tour must return to the starting city.
        </p>
        <ol key="ol-27-21" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Applying Digit DP without tracking tightness correctly.</li>
      </ol>
        <p key="p-27-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The upper-bound restriction must be respected until the chosen prefix becomes strictly smaller.
        </p>
        <ol key="ol-27-23" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Applying divide-and-conquer DP without proving monotonicity.</li>
      </ol>
        <p key="p-27-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An optimization that is not valid for the cost function can silently produce incorrect results.
        </p>
        <ol key="ol-27-25" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Confusing XOR with OR.</li>
      </ol>
        <p key="p-27-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR cancels equal pairs; OR does not.
        </p>
        <ol key="ol-27-27" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Ignoring integer overflow.</li>
      </ol>
        <p key="p-27-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use long for large DP sums, subset sums, and multiplication costs. Use BigInteger when arbitrary precision is needed.
        </p>
        <ol key="ol-27-29" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Forgetting randomized algorithm guarantees.</li>
      </ol>
        <p key="p-27-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected complexity is not the same as worst-case complexity.
        </p>
        <ol key="ol-27-31" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Proving only that an algorithm works on examples.</li>
      </ol>
        <p key="p-27-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A correctness proof must cover every valid input under the stated assumptions.
        </p>
      </div>
    )
  },
  {
    id: 28,
    title: "28. Module 20 — Mastery Checklist",
    summary: "29-topic self-assessment diagnostic checklist tracking comprehensive mastery of advanced DP and algorithm design.",
    content: (
      <div className="space-y-4">
        <p key="p-28-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use this checklist to track your progress as you implement the concepts in Java.
        </p>
        <p key="p-28-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your Module 20 progress
        </p>
        <p key="p-28-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0%
        </p>
        <p key="p-28-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 of 29 topics completed
        </p>
        <p key="p-28-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand advanced DP state modeling
        </p>
        <p key="p-28-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Design and implement multidimensional DP
        </p>
        <p key="p-28-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve unique paths and grid obstacle problems
        </p>
        <p key="p-28-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement minimum path sum
        </p>
        <p key="p-28-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand LCS, longest common substring and Edit Distance
        </p>
        <p key="p-28-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Longest Palindromic Subsequence
        </p>
        <p key="p-28-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand and implement DP on trees
        </p>
        <p key="p-28-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement a DAG-based DP solution
        </p>
        <p key="p-28-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand bitmask DP states
        </p>
        <p key="p-28-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Traveling Salesman using bitmask DP
        </p>
        <p key="p-28-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Digit DP and tight state
        </p>
        <p key="p-28-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement interval DP using Matrix Chain Multiplication
        </p>
        <p key="p-28-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Burst Balloons interval DP
        </p>
        <p key="p-28-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimize DP space using rolling arrays
        </p>
        <p key="p-28-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimize 0/1 Knapsack to one-dimensional DP
        </p>
        <p key="p-28-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand divide-and-conquer DP and monotonicity
        </p>
        <p key="p-28-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement a Meet in the Middle subset-sum algorithm
        </p>
        <p key="p-28-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand all Java bitwise operators
        </p>
        <p key="p-28-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement bit manipulation operations
        </p>
        <p key="p-28-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve unique-number problems using XOR
        </p>
        <p key="p-28-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Enumerate subsets using bitmasks
        </p>
        <p key="p-28-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement GCD, LCM and Sieve of Eratosthenes
        </p>
        <p key="p-28-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement modular arithmetic and fast exponentiation
        </p>
        <p key="p-28-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand modular inverses and combinatorics
        </p>
        <p key="p-28-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Las Vegas and Monte Carlo algorithms
        </p>
        <p key="p-28-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Reservoir Sampling
        </p>
        <p key="p-28-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Analyze advanced time and space complexity
        </p>
        <p key="p-28-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prove DP correctness using mathematical induction
        </p>
        <p key="p-28-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand loop invariants and exchange arguments
        </p>
        <p key="p-28-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reset checklist
        </p>
      </div>
    )
  },
  {
    id: 29,
    title: "29. Final Revision Sheet",
    summary: "High-density quick reference sheet covering state recurrences, bit manipulation formulas, math templates, and proof strategies.",
    content: (
      <div className="space-y-4">
        <p key="p-29-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced Dynamic Programming
        </p>
        <p key="p-29-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multidimensional DP: Multiple state variables.
        </p>
        <p key="p-29-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Grid DP: Combine neighboring cells.
        </p>
        <p key="p-29-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          String DP: Compare and optimize character sequences.
        </p>
        <p key="p-29-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tree DP: Combine answers from children.
        </p>
        <p key="p-29-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Graph DP: Process graph dependencies, often through topological ordering.
        </p>
        <p key="p-29-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval DP: Solve increasingly larger ranges.
        </p>
        <p key="p-29-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Digit DP: Count numbers satisfying digit conditions.
        </p>
        <p key="p-29-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Advanced Optimization
        </p>
        <p key="p-29-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bitmask DP: Represent subsets using integers.
        </p>
        <p key="p-29-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          TSP: Visit every city exactly once and return.
        </p>
        <p key="p-29-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space optimization: Store only necessary previous states.
        </p>
        <p key="p-29-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Divide and conquer DP: Exploit monotonic optimal split positions.
        </p>
        <p key="p-29-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Meet in the Middle: Split an exponential search into two smaller searches.
        </p>
        <p key="p-29-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Bit Manipulation
        </p>
        <div key="table-29-25" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Operation</th>
                <th className="p-3 font-semibold">Formula</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Check bit</td>
                  <td className="p-3">n &amp; (1 &lt;&lt; i)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Set bit</td>
                  <td className="p-3">n</td>
                  <td className="p-3">(1 &lt;&lt; i)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Clear bit</td>
                  <td className="p-3">n &amp; ~(1 &lt;&lt; i)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Toggle bit</td>
                  <td className="p-3">n ^ (1 &lt;&lt; i)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Remove rightmost set bit</td>
                  <td className="p-3">n &amp; (n - 1)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Isolate rightmost set bit</td>
                  <td className="p-3">n &amp; -n</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Power of two</td>
                  <td className="p-3">n &gt; 0 &amp;&amp; (n &amp; (n - 1)) == 0</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-29-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematical Algorithms
        </p>
        <p key="p-29-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          GCD: Euclidean algorithm.
        </p>
        <p key="p-29-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          LCM: Use GCD.
        </p>
        <p key="p-29-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prime generation: Sieve of Eratosthenes.
        </p>
        <p key="p-29-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Large powers: Binary exponentiation.
        </p>
        <p key="p-29-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Large counting: Modular arithmetic.
        </p>
        <p key="p-29-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selection counting: Combinatorics.
        </p>
        <p key="p-29-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Correctness and Analysis
        </p>
        <p key="p-29-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP: Induction and state transitions.
        </p>
        <p key="p-29-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy: Exchange arguments.
        </p>
        <p key="p-29-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Iterative algorithms: Loop invariants.
        </p>
        <p key="p-29-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Randomized algorithms: Probability analysis.
        </p>
        <p key="p-29-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity: States × transitions.
        </p>
      </div>
    )
  },
  {
    id: 30,
    title: "30. What You Should Be Able to Do After Module 20",
    summary: "Core takeaways, achieving algorithmic independence, and mastering unseen problem design in technical interviews.",
    content: (
      <div className="space-y-4">
        <p key="p-30-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          By the completion of this module, you should be able to:
        </p>
        <p key="p-30-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Design DP states independently instead of depending on memorized recurrences.
        </p>
        <p key="p-30-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recognize when a problem requires multiple dimensions.
        </p>
        <p key="p-30-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve advanced grid and string optimization problems.
        </p>
        <p key="p-30-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use tree and graph structures as DP dependencies.
        </p>
        <p key="p-30-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Represent subsets efficiently through bitmasks.
        </p>
        <p key="p-30-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve small-input exponential problems using TSP Bitmask DP.
        </p>
        <p key="p-30-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand digit-based counting with Digit DP.
        </p>
        <p key="p-30-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimize interval and partition DP problems.
        </p>
        <p key="p-30-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reduce memory requirements using space optimization.
        </p>
        <p key="p-30-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recognize when Divide-and-Conquer DP or Meet in the Middle is appropriate.
        </p>
        <p key="p-30-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use XOR and bit manipulation to simplify problems.
        </p>
        <p key="p-30-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Apply number theory and modular arithmetic.
        </p>
        <p key="p-30-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand the role of randomness in algorithm design.
        </p>
        <p key="p-30-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prove algorithm correctness mathematically.
        </p>
        <p key="p-30-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Analyze whether a solution is feasible for the given input constraints.
        </p>
        <p key="p-30-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Final Understanding
        </p>
        <p key="p-30-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Module 20 is where DSA transitions from learning individual algorithms to designing algorithms independently.
        </p>
        <p key="p-30-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The most important difference is the level of thinking required.
        </p>
        <p key="p-30-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In earlier modules, you learned how to implement algorithms such as binary search, graph traversal, shortest paths, sorting, and basic dynamic programming.
        </p>
        <p key="p-30-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here, you learn how to construct the algorithm itself.
        </p>
        <p key="p-30-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When solving a new advanced problem, ask:
        </p>
        <p key="p-30-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          What information must my state remember?
        </p>
        <p key="p-30-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          What decisions are available?
        </p>
        <p key="p-30-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          What smaller states can solve the current state?
        </p>
        <p key="p-30-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can I represent the state using bits?
        </p>
        <p key="p-30-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can I reduce memory by storing only previous results?
        </p>
        <p key="p-30-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can I reduce the transition complexity?
        </p>
        <p key="p-30-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Is there a mathematical property I can exploit?
        </p>
        <p key="p-30-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can I prove that my algorithm is correct?
        </p>
        <p key="p-30-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The ultimate objective is algorithmic independence: being able to take a problem you have never seen before, identify its mathematical structure, design an appropriate solution, implement it efficiently in Java, and prove why it works.
        </p>
        <p key="p-30-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;/USER_REQUEST&gt;
        </p>
        <p key="p-30-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;ADDITIONAL_METADATA&gt;
        </p>
        <p key="p-30-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The current local time is: 2026-11-16T17:35:14+05:30.
        </p>
        <p key="p-30-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;/ADDITIONAL_METADATA&gt;
        </p>
      </div>
    )
  }
];
